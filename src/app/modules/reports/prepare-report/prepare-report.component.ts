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
    private domSanitizer: DomSanitizer,
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


  //images
  get images() {
    return this.itemForm.get('images') as FormArray; 
  }
  onFileInput = (event) => {
    console.log('aaa');
    if (event.target.files && event.target.files.length > 0) {
      zip(
        Array.from<File>(event.target.files)
          .map(y => this.resizeImage(y, 1200, 1200)))        
        .subscribe({
          next: (y) => { 
            console.log(y);
            //let cur = (this.itemForm.get('images').value ?? []) as Array<ReportImageItem>;
            //let newArray = cur.concat(y);
            //this.itemForm.get('images').reset();
            y.forEach(x => this.images.push(new FormGroup({
              'blob': new FormControl(x.blob),
              'size': new FormControl(x.size),
            })));
            console.log(this.images)
          },
          error: (err) => { console.error(err); }
        });
    }
  }

  // readURL(event: any): void {
  //   if (event.target.files && event.target.files[0]) {
  //     const file = event.target.files[0];

  //     const reader = new FileReader();
  //     reader.onload = e => this.file0src = reader.result;

  //     reader.readAsDataURL(file);
  //   }
  // }
  blobToSrc(blob: Blob): SafeUrl {
    console.log('blobToSrc: ' + blob );
    return this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
  }
  getScale(originalSize: ImageSize, maxWidth: number, maxHeight: number): ImageSize {
    if (originalSize.width <= maxWidth && originalSize.height <= maxHeight) {
      return { width: originalSize.width, height: originalSize.height };
    }

    let newWidth: number;
    let newHeight: number;

    if (originalSize.width > originalSize.height) {
      newHeight = originalSize.height * (maxWidth / originalSize.width);
      newWidth = maxWidth;
    } else {
      newWidth = originalSize.width * (maxHeight / originalSize.height);
      newHeight = maxHeight;
    }
    return { width: newWidth, height: newHeight };
  }
  resizeImage(file: File, maxWidth: number, maxHeight: number): Promise<ReportImageItem> {
    return new Promise((resolve, reject) => {
      let image = new Image();
      image.src = URL.createObjectURL(file);
      image.onload = () => {
        let width = image.width;
        let height = image.height;

        if (width <= maxWidth && height <= maxHeight) {
          resolve({ blob: file, size: { width, height } });
        }

        let newWidth: number;
        let newHeight: number;

        if (width > height) {
          newHeight = height * (maxWidth / width);
          newWidth = maxWidth;
        } else {
          newWidth = width * (maxHeight / height);
          newHeight = maxHeight;
        }

        let canvas = document.createElement('canvas');
        canvas.width = newWidth;
        canvas.height = newHeight;

        let context = canvas.getContext('2d');

        context.drawImage(image, 0, 0, newWidth, newHeight);
        let resolve2 = (a: Blob): void => {
          resolve({ blob: a, size: { width: newWidth, height: newHeight }} as ReportImageItem);
        }
        canvas.toBlob(resolve2, file.type)
      };
      image.onerror = reject;
    });
  }
}
