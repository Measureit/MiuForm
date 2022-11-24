import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map, mergeMap, tap, throwError, zip } from 'rxjs';
import { Report } from 'src/app/core/models';
import { ConfigurationService, Logger, ReportService } from 'src/app/core/services';
import { EmailMessage, EmailService } from 'src/app/core/services/email.service';

@Component({
  selector: 'app-preview-report',
  templateUrl: './preview-report.component.html',
  styleUrls: ['./preview-report.component.scss']
})
export class PreviewReportComponent implements OnInit {
  report: Report;
  reportBlob: Blob;
  genereting: boolean;

  constructor(
    private router: Router,
    private logger: Logger,
    private activatedRoute: ActivatedRoute,
    private reportService: ReportService,
    private configurationService: ConfigurationService,
    private emailService: EmailService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        first(),
        map(params => params['id']),
        mergeMap(id => {
          this.genereting = true; 
          this.logger.debug(`prepare report for id: ${id}`)
          if (id !== undefined && id !== '') {
            return this.reportService.getReport(id);
          } else {
            return throwError(() => new Error(`Report with id ${id} does not exist.`));
          }
        }),
        mergeMap(report => {
          this.report = report; 
          return this.reportService.generatePdf(report)
        }),
        tap(x => { this.reportBlob = x })
      )
      .subscribe({
        error: (err) => console.log(err),
        complete: () => this.genereting = false
      })

  }

  public enablePinchOnMobile = true;
  public isMobile = 'ontouchstart' in document.documentElement;
  public minZoom = 0.33;
  public maxZoom = 3;
  public zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.2, 0.25, 0.33, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 3.5, 4];
  private _zoomSetting: number | string | undefined = 'page-width';
  private currentZoomFactor: number;
  // getter and setter make the demo nicer -
  // you probably don't need them in your code
  public get zoomSetting(): number | string  {
    return String(this._zoomSetting);
  }
  public set zoomSetting(zoom: number | string) {
    if (isNaN(Number(zoom))) {
      this._zoomSetting = zoom;
    } else {
      this._zoomSetting = zoom + '%';
    }
  }
  public updateZoomFactor(zoom: number): void {
    this.currentZoomFactor = zoom;
  }

  send() {
    if (this.reportBlob && this.reportBlob.size > 0 && this.report) {      
      let sufix = Date.now().toString();
      
      zip(
        this.configurationService.getDelivery(),
        this.configurationService.getFactory(this.report.factoryInfoId)
      )
      .pipe(
        map(zipRes => {
          let delivery = zipRes[0];
          let factory = zipRes[1];
          let to = (factory.emails ?? []).concat(delivery.deliveryEmails);
          return {
            emailServerUrl: delivery.emailServerUrl, 
            emailServerSecretCode: delivery.emailServerSecretCode,
            email: {
              report: { content: this.reportBlob, name: `${this.report.productId}_${sufix}.pdf`},
              reportData: { content: JSON.stringify(this.report), name: `${this.report.productId}_${sufix}.pdf`},
              from: delivery.fromUser,
              to: to,
              subject: `Subject -> ${this.report.productId}`,
              plainContent: `treść maila`
            } as EmailMessage
          }
        }),
        mergeMap(x => this.emailService.send(x.emailServerUrl, x.emailServerSecretCode, x.email))        
      )
      .subscribe({
        next: (n) => console.log(n),
        error: (err) => console.error(err)
      })
    }
  }
}
