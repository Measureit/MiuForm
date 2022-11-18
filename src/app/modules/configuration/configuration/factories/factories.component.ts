import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first, mergeMap, tap } from 'rxjs';
import { EditorActions } from 'src/app/core/enums';
import { FactoryInfoConfig } from 'src/app/core/models';
import { ConfigurationService, ConsoleLoggerService, Logger } from 'src/app/core/services';
import { EditorComponent, FactoryEditorData } from './editor/editor.component';

@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss']
})
export class FactoriesComponent implements OnInit {

  loadFactoryWithNoActive: boolean = false;
  items: FactoryInfoConfig[] = [];
  
  constructor(
    private logger: Logger,
    private configurationService: ConfigurationService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.reloadFactories(this.loadFactoryWithNoActive);  
  }

  reloadFactories(loadNoActive: boolean) {
    this.configurationService.getFactories(loadNoActive)
      .pipe(
        tap(x => this.items = x),
        first(),
      )
      .subscribe();
  }


  displayEditor(item: FactoryInfoConfig, action: EditorActions) {
    return this.dialog.open(EditorComponent, {
      width: '90%',
      data: { 
        item: item,
        action: action
      } as FactoryEditorData,
    })
    .afterClosed()
    .pipe(
      first(), 
      tap(res => this.logger.debug(`The dialog was closed with result ${res}, action ${action}`)),
      tap(res => {
        if (res === true) {
          this.reloadFactories(this.loadFactoryWithNoActive);  
        }
      })
    );
  }

  addItem() {
    this.displayEditor(FactoryInfoConfig.Create(), EditorActions.Create)
      .subscribe({
        next: (val) => {},
        error: (err) => {}
      });
  }

  updateItem(id: string) {
    const item = this.configurationService.getFactory(id).
      pipe(
        first(),
        mergeMap(item => this.displayEditor(item, EditorActions.Update))
      )
      .subscribe({
        next: (val) => {},
        error: (err) => {}
      });    
  }

  deleteItem(id: string) {
    console.log('delete factory');
    const item = this.configurationService.getFactory(id).
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
