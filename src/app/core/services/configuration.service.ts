import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ChecklistItemConfig, DeliveryConfig, FactoryInfoConfig } from '../models';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService  {
  private readonly dbChecklistItemRepo: Repository<ChecklistItemConfig>;
  private readonly dbFactoryInfoConfigRepo: Repository<FactoryInfoConfig>;
  private readonly dbDeliveryConfigRepo: Repository<DeliveryConfig>;

  constructor() {
    this.dbChecklistItemRepo = new Repository<ChecklistItemConfig>('miuapp_ChecklistItem');
    this.dbFactoryInfoConfigRepo = new Repository<FactoryInfoConfig>('miuapp_FactoryInfoConfig');
    this.dbDeliveryConfigRepo = new Repository<DeliveryConfig>('miuapp_DeliveryConfig');
  }
}


