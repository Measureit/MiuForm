import { Component, OnInit } from '@angular/core';
import { first, tap } from 'rxjs';
import { FactoryInfoConfig } from 'src/app/core/models';
import { ReportService } from 'src/app/core/services';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  loadFactoryWithNoActive: boolean = false;
  factoryList: FactoryInfoConfig[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reloadFactories(this.loadFactoryWithNoActive);  
  }

  reloadFactories(loadNoActive: boolean) {
    this.reportService.getFactories(loadNoActive)
      .pipe(
        tap(x => this.factoryList = x),
        first(),
      )
      .subscribe();
  }

}
