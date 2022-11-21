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
export class EditorComponent {

  item: FactoryInfoConfig;
  itemForm: FormGroup;
  
  public EditorActions = EditorActions; //to use in html



  constructor(
    private configurationService: ConfigurationService,
    public dialogRef: MatDialogRef<EditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FactoryEditorData,
  ) {
    this.item = data.item;
    if (!this.item.emails ) {
      this.item.emails = [];
    }
    this.itemForm = new FormGroup({      
      _id: new FormControl(this.item._id),
      _rev: new FormControl(this.item._rev),
      isActive: new FormControl(this.item.isActive),
      shortName: new FormControl(this.item.shortName),
      name: new FormControl(this.item.name),
      order: new FormControl(this.item.order),
      address: new FormControl(this.item.address),

      emails: new FormArray(this.item.emails.map(
        x => //new FormGroup({
          new FormControl(x)
        //})
      ))
    })
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
    console.log(event.value)
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
