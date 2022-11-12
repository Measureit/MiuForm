//let jsPDF = require('jspdf');
import { jsPDF } from 'jspdf';
import { Injectable } from "@angular/core";
import { from, map, mergeMap, Observable, of } from "rxjs";
import { FactoryInfoConfig, Report, ReportImageItem } from "../models";

//https://codesandbox.io/s/dx5v0?file=/src/index.js
@Injectable({
    providedIn: 'root',
})
export class ReportGeneratorService {

    generatePdf(report: Report): Observable<jsPDF> {
        const doc = new jsPDF();

        return this.addFactoryInfo(doc, report.factoryInfo)
            .pipe(
                mergeMap(x => this.addHeader(x, new Date(report.dateOfCreation).toISOString())),
                mergeMap(x => this.addFactoryInfo(x, report.factoryInfo)),
                mergeMap(x => this.addImages(x, report.images))
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

    private addHeader(doc: jsPDF, dateOfCreation: string): Observable<jsPDF> {
        doc.text(dateOfCreation, 20, 20);
        return of(doc);
    }

    private addFactoryInfo(doc: jsPDF, factoryInfo: FactoryInfoConfig): Observable<jsPDF> {
        if (factoryInfo?.shortName) {
            doc.text(factoryInfo?.shortName, 20, 20);
        }
        return of(doc);
    }

    private addImages(doc: jsPDF, images: ReportImageItem[]): Observable<jsPDF> {
        if (images && images.length > 0) {

            return from(images).
                pipe(
                    mergeMap(x => this.addImageProcess(x.path)),
                    map(x => {
                        doc.addPage();
                        return doc.addImage(x, "png", 5, 5, 0, 0);
                        //return doc;
                    })
                )
        }
        return of(doc);
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