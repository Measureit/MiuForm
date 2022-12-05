//let jsPDF = require('jspdf');
import { jsPDF } from 'jspdf';
import { Injectable } from "@angular/core";
import { from, map, mergeMap, Observable, of, zip } from "rxjs";
import { FactoryInfoConfig, Report, ReportImageItem } from "../models";
import { ConfigurationService } from './configuration.service';
import { DomSanitizer } from '@angular/platform-browser';

interface ReportGeneratorContext {
    doc: jsPDF;
    factory: FactoryInfoConfig;
    yPositioin: number;
    yPage: number;
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
                mergeMap(f => of({ doc: new jsPDF("p", "mm", "a4", true), yPage: 0, yPositioin: 0, factory: f } as ReportGeneratorContext)),
                mergeMap(x => this.addHeader(x, new Date(report.dateOfCreation).toISOString())),                
                mergeMap(x => this.addProductId(x, report.productId)),
                mergeMap(x => this.addFactoryInfo(x, x.factory)),
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

    private addProductId(context: ReportGeneratorContext, dateOfCreation: string): Observable<ReportGeneratorContext> {
        context.doc.text(dateOfCreation, 20, 20);
        return of(context);
    }

    private addHeader(context: ReportGeneratorContext, dateOfCreation: string): Observable<ReportGeneratorContext> {
        context.doc.text(dateOfCreation, 20, 20);
        return of(context);
    }

    private addFactoryInfo(context: ReportGeneratorContext, factoryInfo: FactoryInfoConfig): Observable<ReportGeneratorContext> {
        if (factoryInfo?.shortName) {
            context.doc.text(factoryInfo?.shortName, 20, 20);
        }
        return of(context);
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
}