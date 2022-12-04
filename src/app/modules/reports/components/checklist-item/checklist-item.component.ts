import { Component, Input, OnInit } from '@angular/core';
import { first, map, mergeMap, Observable, tap, zip } from 'rxjs';
import { FactoryInfoConfig, ImageSize, Report, ReportImageItem } from 'src/app/core/models';
import { ReportService } from 'src/app/core/services';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.scss']
})
export class ChecklistItemComponent implements OnInit {
  @Input('checklistItemFormGroup') checklistItemFormGroup: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    console.log('checklist item init');
  }

  get pointImages(): FormArray {
    return this.checklistItemFormGroup.get('pointImages') as FormArray;
  }

  get isChecked(): boolean | null {
    return this.checklistItemFormGroup.get('isChecked').value;
  }
  set isChecked(value: boolean | null)  {
    this.checklistItemFormGroup.get('isChecked').setValue(value);
  }

  onClickChecked() {
    if (this.isChecked === null) {
      this.isChecked = false;
    } else if (this.isChecked === false) {
      this.isChecked = true;
    } else if (this.isChecked === true) {
      this.isChecked = null;
    }
  }
 }
