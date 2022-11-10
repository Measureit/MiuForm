import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import { PrepareReportComponent } from './prepare-report/prepare-report.component';
import { PreviewReportComponent } from './preview-report/preview-report.component';
import { ReportsRoutingModule } from './reports-routing.module';



@NgModule({
  declarations: [
    ReportsComponent,
    PrepareReportComponent,
    PreviewReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
