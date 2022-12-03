import { R } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, first, flatMap, from, map, mergeMap, of, tap, zip } from 'rxjs';
import { Logger, ReportService } from 'src/app/core/services';
import { FactoryInfoConfig, ImageSize, Report, ReportImageItem } from '../../../core/models';



@Component({
  selector: 'app-prepare-report',
  templateUrl: './prepare-report.component.html',
  styleUrls: ['./prepare-report.component.scss']
})
export class PrepareReportComponent implements OnInit {

  item: Report = undefined;
  factoryItems: FactoryInfoConfig[] = [];
  itemForm: FormGroup;

  file0src: SafeHtml; //string | ArrayBuffer;

  constructor(
    private formBuilder: FormBuilder,
    
    private logger: Logger,
    private router: Router,
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
            productName: [this.item.productName, [Validators.required, Validators.minLength(3)]],
            productColor: [this.item.productColor, [Validators.required, Validators.minLength(3)]],
            factoryInfoId: [this.item.factoryInfoId, [Validators.required]],
            checklist: this.formBuilder.array(this.item.checklist.map(
              x => this.formBuilder.group({
                checklistItemId: [x.checklistItemId],
                comment: [x.comment],
                pointImages: this.formBuilder.array(x.pointImages.map(
                  x => this.formBuilder.group({...x})
                )),
                content: [x.content],
                isChecked: [x.isChecked]
              })
            )),
            images: this.formBuilder.array(this.item.images.map(
              x => this.formBuilder.group({...x})
            )),
            reportPath: [this.item.reportPath],
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

  preview() {
    let report = this.getFromFormGroup();
    this.reportService.updateReport(report)
      .pipe(
        first()
      )
      .subscribe({
        next: (b) => {
          this.router.navigate(['/reports/preview', report._id]);
        },
        error: (err) => console.error(err)
      });
  }

  saveReport() {
    let report = this.getFromFormGroup();
    this.reportService.updateReport(report)
      .pipe(
        first(),
        map(x => x)
      )
      .subscribe();
  }

  get images() : FormArray{
    return this.itemForm.get('images') as FormArray; 
  }
}
