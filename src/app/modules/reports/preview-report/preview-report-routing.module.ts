import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewReportComponent } from './preview-report.component';

const routes: Routes = [
  { path: '', redirectTo: 'map-pfd', pathMatch: 'full' },
  {
    path: 'map-pfd',
    component: PreviewReportComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewReportRoutingModule {}
