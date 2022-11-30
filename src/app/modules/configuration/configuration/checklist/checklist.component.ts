import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap, first, mergeMap } from 'rxjs';
import { EditorActions } from 'src/app/core/enums';
import { ChecklistItemConfig, CreateChecklistItemConfig, CreateFactoryInfoConfig, FactoryInfoConfig } from 'src/app/core/models';
import { Logger, ConfigurationService } from 'src/app/core/services';
import { FactoryEditorComponent, FactoryEditorData } from '../factories/editor/editor.component';
import { ChecklistItemEditorComponent, ChecklistItemEditorData } from './editor/editor.component';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {


  loadFactoryWithNoActive: boolean = false;
  items: ChecklistItemConfig[] = [];
  
  constructor(
    private logger: Logger,
    private configurationService: ConfigurationService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.reloadFactories();  
  }

  reloadFactories() {
    this.configurationService.getChecklistItems(true)
      .pipe(
        tap(x => this.items = x),
        first(),
      )
      .subscribe();
  }

  loadChecklistWithNoActiveChange(checked: boolean) {
    this.loadFactoryWithNoActive = checked;
  }

  displayEditor(item: ChecklistItemConfig, action: EditorActions) {
    return this.dialog.open(ChecklistItemEditorComponent, {
      width: '90%',
      data: { 
        item: item,
        action: action
      } as ChecklistItemEditorData,
    })
    .afterClosed()
    .pipe(
      first(), 
      tap(res => this.logger.debug(`The dialog was closed with result ${res}, action ${action}`)),
      tap(res => {
        if (res === true) {
          this.reloadFactories();  
        }
      })
    );
  }

  addItem() {
    this.displayEditor(CreateChecklistItemConfig(), EditorActions.Create)
      .subscribe({
        next: (val) => {},
        error: (err) => {}
      });
  }

  updateItem(id: string) {
    const item = this.configurationService.getChecklistItem(id).
      pipe(
        first(),
        mergeMap(item => this.displayEditor(item, EditorActions.Update))
      )
      .subscribe({
        next: (val) => {},
        error: (err) => {}
      });    
  }

  deleteItem(event, id: string) {
    event.stopPropagation();
    console.log('delete factory');
    const item = this.configurationService.getChecklistItem(id).
      pipe(
        first(),
        mergeMap(item => this.displayEditor(item, EditorActions.Delete))
      )
      .subscribe({
        next: (val) => {},
        error: (err) => {}
      });    
  }
}
