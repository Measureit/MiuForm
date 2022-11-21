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

  public item: FactoryInfoConfig;
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
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  addOrUpdateItem(item: FactoryInfoConfig): void {
    this.configurationService.addOrUpdateFactory(item)
      .pipe(
        first(),
        tap(x => this.dialogRef.close(true))        
      ).subscribe();    
  }

  deleteItem(item: FactoryInfoConfig): void {
    this.configurationService.addOrUpdateFactory(item)
      .pipe(
        first(),
        tap(x => this.dialogRef.close(true))        
      ).subscribe();    
  }

  //handle emails
  public separatorKeysCodes = [ENTER, COMMA];
  //public emailList = [];
  removable = true;
  rulesForm: FormGroup;
  fb: FormBuilder = new FormBuilder();

  addEmail(event): void {
    console.log(event.value)
    if (event.value) {
      if (this.validateEmail(event.value.trim())) {
        this.item.emails.push(event.value.trim());
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
    if (this.item.emails.indexOf(data) >= 0) {
      this.item.emails.splice(this.item.emails.indexOf(data), 1);
    }
  }
  private validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
