import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of, pipe, zip } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { ChecklistItemConfig, CreateDeliveryConfig, CreateIdChecklistItemConfig, CreateIdFactoryInfoConfig, DeliveryConfig, DeliveryId, FactoryInfoConfig } from '../models';
import { ConsoleLoggerService, Logger } from './console.logger.service';
import { DBService } from './db.service';
import { Repository } from './repository';

export interface Configuration {
  factories: FactoryInfoConfig[];
  checklistItems: ChecklistItemConfig[];
  delivery: DeliveryConfig;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService  {

  private readonly dbChecklistItemRepo: Repository<ChecklistItemConfig>;
  private readonly dbFactoryInfoConfigRepo: Repository<FactoryInfoConfig>;
  private readonly dbDeliveryConfigRepo: Repository<DeliveryConfig>;

  constructor(
    private dbService: DBService,
    private logger: Logger
    ) {
    this.dbChecklistItemRepo = new Repository<ChecklistItemConfig>(logger, 'miuapp_ChecklistItem');
    this.dbFactoryInfoConfigRepo = new Repository<FactoryInfoConfig>(logger, 'miuapp_FactoryInfoConfig');
    this.dbDeliveryConfigRepo = new Repository<DeliveryConfig>(logger, 'miuapp_DeliveryConfig');
  }

  //START FACTORIES
  getFactories(withNoActive: boolean) : Observable<FactoryInfoConfig[]> {
    return this.dbFactoryInfoConfigRepo.get(withNoActive);
  }

  getFactory(id: string)  : Observable<FactoryInfoConfig> {
    return this.dbFactoryInfoConfigRepo.getById(id);
  }

  addOrUpdateFactory(factory: FactoryInfoConfig) : Observable<string | undefined> {
    return this.dbFactoryInfoConfigRepo.update(factory);
  }

  changeActive(id: string, isActive: boolean) : Observable<string | undefined> {
    return this.dbFactoryInfoConfigRepo.changeActive(id, isActive);
  }

  //END FACTORIES

  //START CHECK LIST
  getChecklistItem(id: string) : Observable<ChecklistItemConfig> {
    return this.dbChecklistItemRepo.getById(id);
  }

  getChecklistItems(isActive: boolean): Observable<ChecklistItemConfig[]> {
    return this.dbChecklistItemRepo.get(isActive)
    .pipe(
      map(x => x.sort(x => x.order))
    );
  }

  addOrUpdateCheckListItem(item: ChecklistItemConfig) : Observable<string | undefined> {
    return this.dbChecklistItemRepo.update(item);
  }
  //END CHECK LIST

  //START DELIVERY 
  getDelivery(): Observable<DeliveryConfig> {
    return this.dbDeliveryConfigRepo.getById(DeliveryId);
  }

  updateDelivery(deliveryConfig: DeliveryConfig): Observable<string | undefined> {
    return this.dbDeliveryConfigRepo.update(deliveryConfig);
  }
  //END DELIVERY

  //START CONFIG
  getConfig(): Observable<Configuration> {
    return zip(
      this.dbFactoryInfoConfigRepo.get(true),
      this.dbChecklistItemRepo.get(true),
      this.dbDeliveryConfigRepo.getById(DeliveryId)
      .pipe(
        catchError(err => of(CreateDeliveryConfig()))
      )
    )
    .pipe(
      map(x => {
        return {
          factories: x[0],
          checklistItems: x[1],
          delivery: x[2]
        } as Configuration
      })
    );
  }

  setConfig(conf: Configuration): Observable<Configuration> {
    return this.dbDeliveryConfigRepo.getById(DeliveryId)
    .pipe(
      catchError(err => of(CreateDeliveryConfig())),
      mergeMap(x => {
        if (conf.delivery) {
          conf.delivery._rev = x._rev;
          return this.dbDeliveryConfigRepo.update(conf.delivery)
        } 
        return of('');
      }),
      mergeMap(x => 
        this.dbFactoryInfoConfigRepo.set(conf.factories, CreateIdFactoryInfoConfig, (org: FactoryInfoConfig, newIt: FactoryInfoConfig) => {
          org.address = newIt.address;
          org.emails = newIt.emails;
          org.isActive = newIt.isActive;
          org.name = newIt.name;
          org.order = newIt.order;
          org.shortName = newIt.shortName;
        }),        
      ),
      mergeMap(x => 
        this.dbChecklistItemRepo.set(conf.checklistItems, CreateIdChecklistItemConfig, (org: ChecklistItemConfig, newIt: ChecklistItemConfig) => {
          org.content = newIt.content;
          org.isActive = newIt.isActive;
          org.order = newIt.order;
        }),
      ),
      map(x => {
        return conf;
      })
    );
  }
  //END CONFIG
}


