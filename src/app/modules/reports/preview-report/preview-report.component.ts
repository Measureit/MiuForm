import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map, mergeMap, tap, throwError } from 'rxjs';
import { Logger, ReportService } from 'src/app/core/services';
import { EmailService } from 'src/app/core/services/email.service';

@Component({
  selector: 'app-preview-report',
  templateUrl: './preview-report.component.html',
  styleUrls: ['./preview-report.component.scss']
})
export class PreviewReportComponent implements OnInit {
  reportBlob: Blob;
  genereting: boolean;

  constructor(
    private router: Router,
    private logger: Logger,
    private activatedRoute: ActivatedRoute,
    private reportService: ReportService,
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
        mergeMap(report => this.reportService.generatePdf(report)),
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
    this.emailService.send()
      // .pipe(first())
      // .subscribe(
      //   { 
      //     next: x => console.log('sent'),
      //     error: err => console.error(err)
      //   })
        ;      
  }
}
