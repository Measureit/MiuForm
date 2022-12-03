import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import { PrepareReportComponent } from './prepare-report/prepare-report.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImagesSelectorComponent } from './components/images-selector/images-selector.component';



@NgModule({
  declarations: [
    ImagesSelectorComponent,
    ReportsComponent,
    PrepareReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule
  ]
})
export class ReportsModule { }
