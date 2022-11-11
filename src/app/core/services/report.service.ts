import { Injectable } from '@angular/core';
import { ChecklistItemConfig, DeliveryConfig, FactoryInfoConfig, Report } from '../models';
import { Repository } from "./repository";


@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private readonly dbChecklistItemRepo: Repository<ChecklistItemConfig>;
  private readonly dbFactoryInfoConfigRepo: Repository<FactoryInfoConfig>;
  private readonly dbDeliveryConfigRepo: Repository<DeliveryConfig>;
  private readonly dbReportRepo: Repository<Report>;

  constructor() {
    this.dbChecklistItemRepo = new Repository<ChecklistItemConfig>('miuapp_ChecklistItem');
    this.dbFactoryInfoConfigRepo = new Repository<FactoryInfoConfig>('miuapp_FactoryInfoConfig');
    this.dbDeliveryConfigRepo = new Repository<DeliveryConfig>('miuapp_DeliveryConfig');
    this.dbReportRepo = new Repository<Report>('miuapp_Report');
  }
}
