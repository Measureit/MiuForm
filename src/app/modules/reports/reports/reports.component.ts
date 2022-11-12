import { Component, OnInit } from '@angular/core';
import { first, tap } from 'rxjs';
import { FactoryInfoConfig, Report } from 'src/app/core/models';
import { ReportService } from 'src/app/core/services';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  loadFactoryWithNoActive: boolean = false;
  factoryItems: FactoryInfoConfig[] = [];
  items: Report[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reloadFactories(this.loadFactoryWithNoActive);  
  }

  reloadFactories(loadNoActive: boolean) {
    this.reportService.getFactories(loadNoActive)
      .pipe(
        tap(x => this.factoryItems = x),
        first(),
      )
      .subscribe();
  }
}
