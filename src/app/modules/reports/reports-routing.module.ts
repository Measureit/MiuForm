import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrepareReportComponent } from './prepare-report/prepare-report.component';
import { PreviewReportComponent } from './preview-report/preview-report.component';

import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { 
    path: '', 
    component: ReportsComponent 
  },
  { 
    path: 'prepare', 
    component: PrepareReportComponent 
  },
  { 
    path: 'preview/:id', 
    component: PreviewReportComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
