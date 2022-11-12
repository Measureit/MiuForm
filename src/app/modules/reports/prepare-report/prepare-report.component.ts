import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, flatMap, map, mergeMap, of, tap } from 'rxjs';
import { Logger, ReportService } from 'src/app/core/services';
import {  FactoryInfoConfig, Report } from '../../../core/models';
@Component({
  selector: 'app-prepare-report',
  templateUrl: './prepare-report.component.html',
  styleUrls: ['./prepare-report.component.scss']
})
export class PrepareReportComponent implements OnInit {

  report: Report = undefined;
  factoryItems: FactoryInfoConfig[] = [];

  constructor(
    private logger: Logger,
    private activatedRoute: ActivatedRoute,
    private reportService: ReportService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params
      .pipe(
        first(),
        map(params => params['id']),      
        mergeMap(id => {
          this.logger.debug(`prepare report for id: ${id}`)
          if (id !== undefined && id !== '') {
            return this.reportService.getReport(id);
          } else {
            return this.reportService.createNewReport();
          }
        }),
        first(),
        mergeMap(x => {
          this.report = x;
          return this.reportService.getFactories(false);
        }),
        first(),
        map(x => this.factoryItems = x)
      ).subscribe();
  }

  generateReport() {
    
  }
}
