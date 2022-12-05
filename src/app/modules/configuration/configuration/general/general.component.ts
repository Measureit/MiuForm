import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { first, map, tap } from 'rxjs';
import { CreateDeliveryConfig, DeliveryConfig } from 'src/app/core/models';
import { Configuration, ConfigurationService } from 'src/app/core/services';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  
  delivery: DeliveryConfig;
  itemForm: FormGroup;
  loading: boolean = false;

  constructor(private formBuiler: FormBuilder,
    private configurationService: ConfigurationService,) { 
  }

  ngOnInit(): void {
    this.loading = true;
    this.configurationService.getDelivery()
      .pipe(
        first()
      )
      .subscribe({
        next: (read) => {
          this.delivery = read;
          this.createForm(this.delivery);
          this.loading = false;
        },
        error: (err) => {
          console.error(err);// first time is not error (delivery does not exists)
          this.delivery = CreateDeliveryConfig();   
          this.createForm(this.delivery);
          this.loading = false;     
        }
      });
  }

  createForm(delivery: DeliveryConfig) {
    console.log('creatForm fun');
    this.itemForm = this.formBuiler.group({
      _id: [delivery._id],
      _rev: [delivery._rev],
      emailServerSecretCode: [delivery.emailServerSecretCode],
      emailServerUrl: [delivery.emailServerUrl],
      fromUser: [delivery.fromUser],
      deliveryEmails: this.formBuiler.array(delivery.deliveryEmails.map(
        x => //new FormGroup({
          [x]
        //})
      ))
    });
  }

  getFromFormGroup(): DeliveryConfig {
    return this.itemForm.getRawValue() as DeliveryConfig;
  }
  
  saveDelivery() {
    let deliveryToSave = this.getFromFormGroup();
    this.configurationService.updateDelivery(deliveryToSave)
      .pipe(
        first()
      )
      .subscribe({
        next: (x) => console.log(x),
        error: (err) => console.error(err)
      })
  }

  download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  saveConfig() {
    this.configurationService.getConfig()
    .pipe(
      first(),
      tap(x => {        
        this.download(JSON.stringify(x), 'miu_config.json', 'text/plain');
      })
    )
    .subscribe({
      next: (x) => {},
      error: (err) => console.log(err)
    })
  }

  loadConfig = (event) => {
      if (event.target.files && event.target.files.length > 0) {
        var file: File = event.target.files[0];
        var myReader: FileReader = new FileReader();
        myReader.onloadend = (e) => {
            var config = JSON.parse(myReader.result as string) as Configuration;
            if (config) {
              this.configurationService.setConfig(config)
              .pipe(map(x => {
                window.location.reload();
              }))
              .subscribe({
                next: (x) => console.log(x),
                error: (err) => console.error(err)
              })
            } else {
              console.error('Config - No parse correctly.');
            } 
        }

        myReader.readAsText(file); 
      }
  }

  //EMAILS
  public separatorKeysCodes = [ENTER, COMMA];
  removable = true;

  get formEmails() {
    return this.itemForm.get("deliveryEmails") as FormArray;
  }

  addEmail(event): void {
    console.log(event.value)
    if (event.value) {
      if (this.validateEmail(event.value.trim())) {
        this.formEmails
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
