import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private formBuilder: FormBuilder,
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
          this.itemForm = this.formBuilder.group({
            _id: [this.item._id],
            _rev: [this.item._rev],
            dateOfCreation: [this.item.dateOfCreation],
            productId: [this.item.productId, [Validators.required, Validators.minLength(3)]],    
            factoryInfoId: [this.item.factoryInfoId, [Validators.required]],
            checklist: this.formBuilder.array(this.item.checklist.map(
              x => this.formBuilder.group({
                checklistItemId: [x.checklistItemId],
                comment: [x.comment],
                pointImages: this.formBuilder.array(x.pointImages.map(
                  x => this.formBuilder.group({
                    path: [x.path]
                  })
                )), 
                content: [x.content],
                isChecked: [x.isChecked]
              })
            )), 
            images: this.formBuilder.array(this.item.images.map(
              x => this.formBuilder.group({
                path: [x.path]
              })
            )), 
            reportPath: [this.item.reportPath],  
            dateOfGenerating: [this.item.dateOfGenerating],  
            dateOfDelivery: [this.item.dateOfDelivery]
          });          
          return this.reportService.getFactories(false);
        }),
        first(),
        map(x => this.factoryItems = x)
      ).subscribe();
  }

  getFromFormGroup(): Report {
    return this.itemForm.getRawValue() as Report;
  } 

  generateReport() {
    this.reportService.generateAndSaveReport(this.getFromFormGroup())
      .pipe(
        first(),
        map(x => x)
      )
      .subscribe();
  }

  saveReport() {
    this.reportService.updateReport(this.getFromFormGroup())
      .pipe(
        first(),
        map(x => x)
      )
      .subscribe();
  }
}
