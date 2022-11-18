import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import { Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ChecklistItemConfig, DeliveryConfig, FactoryInfoConfig } from '../models';
import { ConsoleLoggerService, Logger } from './console.logger.service';
import { DBService } from './db.service';
import { Repository } from './repository';

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

  addOrUpdateFactory(factory: FactoryInfoConfig) : Observable<boolean> {
    return this.dbFactoryInfoConfigRepo.update(factory);
  }

  changeActive(id: string, isActive: boolean) : Observable<boolean> {
    return this.dbFactoryInfoConfigRepo.changeActive(id, isActive);
  }

  //END FACTORIES
}


