import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { first, tap } from 'rxjs';
import { EditorActions } from 'src/app/core/enums';
import { FactoryInfoConfig } from 'src/app/core/models';
import { ConfigurationService } from 'src/app/core/services';

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
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  addOrUpdate(item: FactoryInfoConfig): void {
    this.configurationService.addOrUpdateFactory(item)
      .pipe(
        first(),
        tap(x => this.dialogRef.close(true))        
      ).subscribe();    
  }

}
