//let jsPDF = require('jspdf');
import { jsPDF } from 'jspdf';
import { Injectable } from "@angular/core";
import { from, map, mergeMap, Observable, of, zip } from "rxjs";
import { FactoryInfoConfig, Report, ReportChecklistItem, ReportImageItem } from "../models";
import { ConfigurationService } from './configuration.service';
import { DomSanitizer } from '@angular/platform-browser';
import moment from 'moment';
import { M } from '@angular/cdk/keycodes';
import { addFontToDoc, fontMiu } from './AbhayaLibre-Regular-normal';

interface ReportGeneratorConfig {
    vMargin: number;
    hMargin: number;
    pageHeight: number;
    pageWidth: number;
    lineDistance: number;
}
interface ReportGeneratorContext {
    doc: jsPDF;
    factory: FactoryInfoConfig;
    yPosition: number;
    yPage: number;
    config: ReportGeneratorConfig;
}

//https://codesandbox.io/s/dx5v0?file=/src/index.js
@Injectable({
    providedIn: 'root',
})
export class ReportGeneratorService {


    constructor(private configurationService: ConfigurationService,
        private domSanitizer: DomSanitizer) {
    }

    getFactoryInfoById(id: string): Observable<FactoryInfoConfig> {
        return this.configurationService.getFactory(id);
    }


    generatePdf(report: Report): Observable<jsPDF> {
        return this.getFactoryInfoById(report.factoryInfoId)
            .pipe(                
                mergeMap(f => {
                    let doc = new jsPDF("p", "mm", "a4", true);
                    addFontToDoc(doc, fontMiu);
                    return of({ doc: doc, 
                        yPage: 0, yPosition: 0, factory: f,
                        config: { vMargin: 10, hMargin: 10, lineDistance: 3,
                            pageHeight: doc.internal.pageSize.height || doc.internal.pageSize.getHeight(),
                            pageWidth: doc.internal.pageSize.width || doc.internal.pageSize.getWidth() } as ReportGeneratorConfig
                    } as ReportGeneratorContext)
                }),
                mergeMap(x => this.addHeader(x, moment(new Date(report.dateOfCreation)).format('DD-MM-YYYY HH:mm:ss'))),                
                mergeMap(x => this.addFactoryInfo(x, x.factory)),
                mergeMap(x => this.addProductInfo(x, report.productName, report.productId, report.productColor)),                
                mergeMap(x => this.addChecklist(x, report.checklist)),
                mergeMap(x => this.addComment(x, report.comment)),
                mergeMap(x => this.addImages(x, report.images)),
                mergeMap(x => of(x.doc))
            );
    }


    private addImageProcess(reportImageItem: ReportImageItem): Observable<HTMLImageElement> {
        return from(new Promise<HTMLImageElement>((resolve, reject) => {
            let img = new Image();
            img.src = this.domSanitizer.bypassSecurityTrustHtml(URL.createObjectURL(reportImageItem.blob)) as string;
            img.onload = () => resolve(img);
            img.onerror = reject;
        }));
    }

    private addProductInfo(context: ReportGeneratorContext, productName: string, productId: string, productColor: string): Observable<ReportGeneratorContext> {
        return this.addTextLine(context, "Nazwa produktu: " + productName, 15)
            .pipe(
                mergeMap(x => this.addTextLine(context, "Id produktu: " + productId, 15)), 
                mergeMap(x => this.addTextLine(context, "Kolor produktu: " + productColor, 15))
            )
        ;
    }

    private newPage(context: ReportGeneratorContext) {
        context.doc.addPage();
        context.yPage = context.yPage + 1;
        context.yPosition = context.config.vMargin; 
    }
    
    private addSpace(context: ReportGeneratorContext, ySpace: number) {
        context.yPosition = context.yPosition + ySpace; 
    }

    private fontSizeToMm(fontSize: number) : number {
        return fontSize / 3.2; //todo: font size to mm 
    }
    private addTextLine(context: ReportGeneratorContext, text: string, fontSize: number, 
        align: "left" | "center" | "right" = "left", makeBottomMargin: boolean = true, keepY: boolean = false) : Observable<ReportGeneratorContext> {
        context.yPosition = Math.max(context.yPosition, context.config.vMargin);
        if (context.yPosition + fontSize > context.config.pageHeight - 2*context.config.vMargin) {
            this.newPage(context);
        }
        context.doc.setFontSize(fontSize);
        let x = context.config.hMargin; 
        switch(align) {
            case 'center':
                x = context.config.pageWidth / 2;
                break;
            case 'right':
                x = context.config.pageWidth - context.config.hMargin;
                break;
        }
        console.log('y: ' + context.yPosition )
        context.doc.text(text, x, context.yPosition, {align: align});
        if (!keepY) {
            context.yPosition = context.yPosition + this.fontSizeToMm(fontSize);
        }
        if (makeBottomMargin) {
            context.yPosition = context.yPosition + context.config.lineDistance;
        }
        return of(context);
    } 
    private addHeader(context: ReportGeneratorContext, dateOfCreation: string): Observable<ReportGeneratorContext> {
        return this.addTextLine(context, dateOfCreation, 10, 'right', false, true)
            .pipe(
                mergeMap(x => this.addTextLine(x, "MY COMPANY", 10)),
                mergeMap(x => this.addTextLine(x, "MY COMPANY", 10)),
                mergeMap(x => this.addTextLine(x, "MY COMPANY", 10)),                
                mergeMap(x => {
                    this.addSpace(x, 10);
                    return this.addTextLine(x, "Raport pokontrolny produkcji mebla", 20, 'center');
                }),
            )
    }
//ĄĆŻŃÓŁĘ ąćżńół 
    private addFactoryInfo(context: ReportGeneratorContext, factoryInfo: FactoryInfoConfig): Observable<ReportGeneratorContext> {
        this.addSpace(context, 20);
        return this.addTextLine(context, "Firma/Miejsce wykonania kontroli:", 17, 'center')
            .pipe(
                mergeMap(x => this.addTextLine(x, factoryInfo.name, 15, 'center')),
                mergeMap(x => this.addTextLine(x, factoryInfo.address, 15, 'center'))
            );
        }

    private blobToBase64 = (blob: Blob) : Promise<string> => {
        return new Promise((resolve, _) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });
      }
    private addImages(context: ReportGeneratorContext, images: ReportImageItem[]): Observable<ReportGeneratorContext> {
        if (images && images.length > 0) {

            return zip(images.map(x => from(this.blobToBase64(x.blob)))).
                pipe(
                    
                    mergeMap((a) => {
                        a.forEach(x => 
                        { 
                            console.log(x);
                            context.doc.addPage();
                            context.doc.addImage(
                                x
                                , "png", 5, 5, 0, 0);
                        })
                        return of(context);
                    })
                )
        }
        return of(context);
    }

    private addComment(context: ReportGeneratorContext, comment: string): Observable<ReportGeneratorContext> {
        return of(context);
    }

    private addChecklist(context: ReportGeneratorContext, checklist: ReportChecklistItem[]): Observable<ReportGeneratorContext> {
        return of(context);
    }
}