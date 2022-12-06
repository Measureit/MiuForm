//let jsPDF = require('jspdf');
import { jsPDF } from 'jspdf';
import { Injectable } from "@angular/core";
import { from, map, merge, mergeMap, Observable, of, zip } from "rxjs";
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

interface AddTextLineOptions {
    fontSize?: number;
    xPos?: number;
    align?: "left" | "center" | "right";
    makeBottomMargin?: boolean; 
    keepY?: boolean;
}

//https://codesandbox.io/s/dx5v0?file=/src/index.js
@Injectable({
    providedIn: 'root',
})
export class ReportGeneratorService {


    constructor(private configurationService: ConfigurationService,
        private domSanitizer: DomSanitizer) {
    }

    private newPage(context: ReportGeneratorContext) {
        context.doc.addPage();
        context.yPage = context.yPage + 1;
        context.yPosition = context.config.vMargin; 
    }
    
    private addYSpace(context: ReportGeneratorContext, ySpace: number) {
        context.yPosition = context.yPosition + ySpace; 
    }

    private fontSizeToMm(fontSize: number) : number {
        return fontSize / 3.2; //todo: font size to mm 
    }
    
    private addTextLine(context: ReportGeneratorContext, text: string, options: AddTextLineOptions) { //}: Observable<ReportGeneratorContext> {
        var defaults = {
            //xPos: undefined,
            fontSize: 16,
            align: "left",
            makeBottomMargin: true, 
            keepY: false
        };
        let actual = Object.assign({}, defaults, options);
        
        context.yPosition = Math.max(context.yPosition, context.config.vMargin);
        if (context.yPosition + actual.fontSize > context.config.pageHeight - 2*context.config.vMargin) {
            this.newPage(context);
        }
        context.doc.setFontSize(actual.fontSize);

        let x = actual.xPos;
        if (actual.xPos === undefined) {
            x = context.config.hMargin;
            switch(actual.align) {
                case 'center':
                    x = context.config.pageWidth / 2;
                    break;
                case 'right':
                    x = context.config.pageWidth - context.config.hMargin;
                    break;
            }
        }
        console.log('y: ' + context.yPosition )
        context.doc.text(text, x, context.yPosition, {align: actual.align});
        if (!actual.keepY) {
            context.yPosition = context.yPosition + this.fontSizeToMm(actual.fontSize);
        }
        if (actual.makeBottomMargin) {
            context.yPosition = context.yPosition + context.config.lineDistance;
        }
        //return of(context);
    } 

    generatePdf(report: Report): Observable<jsPDF> {
        return this.configurationService.getFactory(report.factoryInfoId)
            .pipe(                
                mergeMap(f => {
                    let doc = new jsPDF("p", "mm", "a4", true);
                    addFontToDoc(doc, fontMiu);
                    return of({ doc: doc, 
                        yPage: 0, yPosition: 0, factory: f,
                        config: { vMargin: 10, hMargin: 10, lineDistance: 5,
                            pageHeight: doc.internal.pageSize.height || doc.internal.pageSize.getHeight(),
                            pageWidth: doc.internal.pageSize.width || doc.internal.pageSize.getWidth() } as ReportGeneratorConfig
                    } as ReportGeneratorContext)
                }),
                mergeMap(x => {
                    this.addHeader(x, moment(new Date(report.dateOfCreation)).format('DD-MM-YYYY HH:mm:ss'));
                    this.addFactoryInfo(x, x.factory);
                    this.addProductInfo(x, report.productName, report.productId, report.productColor);
                    this.addChecklist(x, report.checklist);
                    this.addComment(x, report.comment);
                    this.addImages(x, report.images);
                    return of(x.doc);
                })
            );
    }

    private addHeader(context: ReportGeneratorContext, dateOfCreation: string) { //}: Observable<ReportGeneratorContext> {
        this.addTextLine(context, dateOfCreation, { fontSize: 10, align: 'right', makeBottomMargin: false, keepY: true});
        this.addTextLine(context, "MY COMPANY", { fontSize: 15 });
        this.addTextLine(context, "MY COMPANY ADDRESS", { fontSize: 15 });
        this.addYSpace(context, 10);
        this.addTextLine(context, "Raport pokontrolny produkcji mebla", { fontSize: 20, align: 'center'});
        
    }
//ĄĆŻŃÓŁĘ ąćżńół 
    private addFactoryInfo(context: ReportGeneratorContext, factoryInfo: FactoryInfoConfig) { //}: Observable<ReportGeneratorContext> {
        this.addYSpace(context, 15);
        this.addTextLine(context, "Firma/Miejsce wykonania kontroli:", { fontSize: 17, align: 'center'});
        this.addTextLine(context, factoryInfo.name, { fontSize: 15, align: 'center'});
        this.addTextLine(context, factoryInfo.address, { fontSize: 15, align: 'center'});
    }
            
    private addProductInfo(context: ReportGeneratorContext, productName: string, productId: string, productColor: string) { //}: Observable<ReportGeneratorContext> {
        this.addYSpace(context, 7);
        this.addTextLine(context, "Nazwa produktu: " + productName, { fontSize: 15} );
        this.addTextLine(context, "Id produktu: " + productId, { fontSize: 15});
        this.addTextLine(context, "Kolor produktu: " + productColor, { fontSize: 15});
    }
    
    

    private addImages(context: ReportGeneratorContext, images: ReportImageItem[]) { //} Observable<ReportGeneratorContext> {
        if (images && images.length > 0) {

            let imagesAsBase64 = images. //map(async x => await this.blobToBase64(x.blob));
            forEach(ib => {
                context.doc.addPage();
                context.doc.addImage(ib.base64, "png", 5, 5, 0, 0);
            });            
        }
    }

    private addComment(context: ReportGeneratorContext, comment: string) { //} Observable<ReportGeneratorContext> {
        
    }

    private addChecklist(context: ReportGeneratorContext, checklist: ReportChecklistItem[]) { //}: Observable<ReportGeneratorContext> {
        const answerTextWidth = 20;
        const numberWidth = 5;
        let contentWidth = context.config.pageHeight - 2 * context.config.hMargin 
            - answerTextWidth - numberWidth;
        
        this.addYSpace(context, 10);
        checklist.forEach(x => {
            var arr = context.doc.splitTextToSize(x.content, contentWidth)
            console.log('arr: ' + JSON.stringify(arr));                    
            this.addTextLine(context, `${x.order + 1}.`, { xPos: context.config.hMargin + numberWidth, align: 'right' });
        });        
    }
}