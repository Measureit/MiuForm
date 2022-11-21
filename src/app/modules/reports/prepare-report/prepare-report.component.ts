import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
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

  item: Report = undefined;
  factoryItems: FactoryInfoConfig[] = [];
  itemForm: FormGroup;

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
          this.item = x;
          this.itemForm = new FormGroup({
            dateOfCreation: new FormControl(this.item.dateOfCreation),
            productId: new FormControl(this.item.productId),    
            factoryInfo: new FormControl(this.item.factoryInfoId),
            checklist: new FormArray(this.item.checklist.map(
              x => new FormGroup({
                checklistItemId: new FormControl(x.checklistItemId),
                comment: new FormControl(x.comment),
                pointImages: new FormArray(x.pointImages.map(
                  x => new FormGroup({
                    path: new FormControl(x.path)
                  })
                )), 
                content: new FormControl(x.content),
                isChecked: new FormControl(x.isChecked)
              })
            )), 
            images: new FormArray(this.item.images.map(
              x => new FormGroup({
                path: new FormControl(x.path)
              })
            )), 
            reportPath: new FormControl(this.item.reportPath),  
            dateOfGenerating: new FormControl(this.item.dateOfGenerating),  
            dateOfDelivery: new FormControl(this.item.dateOfDelivery)
          });          
          return this.reportService.getFactories(false);
        }),
        first(),
        map(x => this.factoryItems = x)
      ).subscribe();
  }

  generateReport() {
    this.reportService.generateAndSaveReport(this.item)
      .pipe(
        first(),
        map(x => x)
      )
      .subscribe();
  }

  saveReport() {
    this.reportService.updateReport(this.item)
      .pipe(
        first(),
        map(x => x)
      )
      .subscribe();
  }
}
