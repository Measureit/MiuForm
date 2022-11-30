import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { FactoriesComponent } from './configuration/factories/factories.component';
import { ChecklistComponent } from './configuration/checklist/checklist.component';
import { GeneralComponent } from './configuration/general/general.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditorComponent } from './configuration/factories/editor/editor.component';



@NgModule({
  declarations: [
    ConfigurationComponent,
    FactoriesComponent,
    ChecklistComponent,
    GeneralComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    SharedModule
  ]
})
export class ConfigurationModule { }
