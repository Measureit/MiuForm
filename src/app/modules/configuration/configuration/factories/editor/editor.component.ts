import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { first, tap } from 'rxjs';
import { EditorActions } from 'src/app/core/enums';
import { FactoryInfoConfig } from 'src/app/core/models';
import { ConfigurationService } from 'src/app/core/services';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, AbstractControl, Validators, FormControl, FormArray, FormBuilder } from '@angular/forms';

export interface FactoryEditorData {
  item: FactoryInfoConfig;
  action: EditorActions;
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class FactoryEditorComponent {

  item: FactoryInfoConfig;
  itemForm: FormGroup;
  
  public EditorActions = EditorActions; //to use in html



  constructor(
    private formBuiler: FormBuilder,
    private configurationService: ConfigurationService,
    public dialogRef: MatDialogRef<FactoryEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FactoryEditorData,
  ) {
    this.item = data.item;
    if (!this.item.emails ) {
      this.item.emails = [];
    }
    this.itemForm = this.formBuiler.group({      
      _id: [this.item._id],
      _rev: [this.item._rev],
      isActive: [this.item.isActive],
      shortName: [this.item.shortName, [Validators.required, Validators.minLength(2)]],
      name: [this.item.name, [Validators.required, Validators.minLength(2)]],
      order: [this.item.order],
      address: [this.item.address],

      emails: this.formBuiler.array(this.item.emails.map(
        x => //new FormGroup({
          [x]
        //})
      ))
    });
    this.itemForm.markAllAsTouched();
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  getFromFormGroup(): FactoryInfoConfig {
    return this.itemForm.getRawValue() as FactoryInfoConfig;
  } 

  addOrUpdateItem(item: FactoryInfoConfig): void {
    this.configurationService.addOrUpdateFactory(item)
      .pipe(
        first(),
        tap(x => this.dialogRef.close(true))        
      ).subscribe();    
  }

  deleteItem(item: FactoryInfoConfig): void {
    item.isActive = false;
    this.configurationService.addOrUpdateFactory(item)
      .pipe(
        first(),
        tap(x => this.dialogRef.close(true))        
      ).subscribe();    
  }

  //handle emails
  public separatorKeysCodes = [ENTER, COMMA];
  removable = true;

  get formEmails() {
    return this.itemForm.get("emails") as FormArray;
  }

  addEmail(event): void {
    if (event.value) {
      if (this.validateEmail(event.value.trim())) {
        (this.itemForm.get('emails') as FormArray)
          .push(new FormControl(event.value.trim()));
        if (event.input) {
          event.input.value = '';
        }
      } else {
        //this.item.emails.push({ value: event.value });
        //this.rulesForm.controls['emails'].setErrors({'incorrectEmail': true});
        console.error('wrong email...');
      }
    }
  }

  removeEmail(data: any): void {
    console.log('Removing ' + data)
    let inx = this.formEmails.value.indexOf(data);
    if (inx >= 0) {
      this.formEmails.removeAt(inx);
    }
  }
  private validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
