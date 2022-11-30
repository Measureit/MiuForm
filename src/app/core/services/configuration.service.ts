import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of, zip } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { ChecklistItemConfig, DeliveryConfig, DeliveryId, FactoryInfoConfig } from '../models';
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
      this.dbDeliveryConfigRepo.getById(DeliveryId))
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
  //END CONFIG
}


