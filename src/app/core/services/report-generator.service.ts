//let jsPDF = require('jspdf');
import { jsPDF } from 'jspdf';
import { Injectable } from "@angular/core";
import { from, map, mergeMap, Observable, of } from "rxjs";
import { FactoryInfoConfig, Report, ReportImageItem } from "../models";
import { ConfigurationService } from './configuration.service';

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


    constructor(private configurationService: ConfigurationService) {
    }

    getFactoryInfoById(id: string): Observable<FactoryInfoConfig> {
        return this.configurationService.getFactory(id);
    }


    generatePdf(report: Report): Observable<jsPDF> {
        return this.getFactoryInfoById(report.productId)
            .pipe(
                mergeMap(f => of({ doc: new jsPDF, yPage: 0, yPositioin: 0, factory: f } as ReportGeneratorContext)),
                mergeMap(x => this.addHeader(x, new Date(report.dateOfCreation).toISOString())),                
                mergeMap(x => this.addProductId(x, report.productId)),
                mergeMap(x => this.addFactoryInfo(x, x.factory)),
                mergeMap(x => this.addImages(x, report.images)),
                mergeMap(x => of(x.doc))
            );
    }


    private addImageProcess(src: string): Observable<HTMLImageElement> {
        return from(new Promise<HTMLImageElement>((resolve, reject) => {
            let img = new Image();
            img.src = src;
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

    private addImages(context: ReportGeneratorContext, images: ReportImageItem[]): Observable<ReportGeneratorContext> {
        if (images && images.length > 0) {

            return from(images).
                pipe(
                    mergeMap(x => this.addImageProcess(x.path)),
                    map(htmlImage => {
                        context.doc.addPage();
                        context.doc.addImage(htmlImage, "png", 5, 5, 0, 0);
                        return context;
                    })
                )
        }
        return of(context);
        // for (const [i, reportImageItem] of images.entries()) {
        //     const image = this.addImageProcess(reportImageItem.path);
        //     doc.addPage();
        //     doc.addImage(image, "png", 5, 5, 0, 0);
        //     // if (i !== images.length - 1) {
        //     //     doc.addPage();
        //     // }
        // }
        // return doc;
    }
}