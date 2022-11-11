import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { FactoriesComponent } from './configuration/factories/factories.component';
import { ChecklistComponent } from './configuration/checklist/checklist.component';
import { DeliveryComponent } from './configuration/delivery/delivery.component';



@NgModule({
  declarations: [
    ConfigurationComponent,
    FactoriesComponent,
    ChecklistComponent,
    DeliveryComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }
