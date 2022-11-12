import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first, tap } from 'rxjs';
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


  add() {
    const dialogRef = this.dialog.open(EditorComponent, {
      width: '90%',
      data: { 
        item: FactoryInfoConfig.Create(),
        action: EditorActions.Create
      } as FactoryEditorData,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.logger.debug(`The dialog was closed with result ${result}`);
      if (result === true) {
        this.reloadFactories(this.loadFactoryWithNoActive);  
      }
    });
  }
}
