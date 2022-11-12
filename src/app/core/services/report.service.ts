import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ChecklistItemConfig, DeliveryConfig, FactoryInfoConfig, Report } from '../models';
import { ConsoleLoggerService, Logger } from './console.logger.service';
import { DBService } from './db.service';
import { Repository } from "./repository";

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private readonly dbChecklistItemRepo: Repository<ChecklistItemConfig>;
  private readonly dbFactoryInfoConfigRepo: Repository<FactoryInfoConfig>;
  private readonly dbDeliveryConfigRepo: Repository<DeliveryConfig>;
  private readonly dbReportRepo: Repository<Report>;

  constructor(
    private dbService: DBService,
    private logger: Logger
  ) {
    this.dbChecklistItemRepo = new Repository<ChecklistItemConfig>(logger, 'miuapp_ChecklistItem');
    this.dbFactoryInfoConfigRepo = new Repository<FactoryInfoConfig>(logger, 'miuapp_FactoryInfoConfig');
    this.dbDeliveryConfigRepo = new Repository<DeliveryConfig>(logger, 'miuapp_DeliveryConfig');
    this.dbReportRepo = new Repository<Report>(logger, 'miuapp_Report');
  }

  getFactories(withNoActive: boolean) : Observable<FactoryInfoConfig[]> {
    return this.dbFactoryInfoConfigRepo.get(withNoActive);
  }

  createNewReport() : Observable<Report> {
    return this.dbChecklistItemRepo.get(false)
      .pipe(map(x => Report.Create(x)));
  }

  getReport(id: string) : Observable<Report> {
    return this.dbReportRepo.getById(id);
  }
  getReports(withNoActive: boolean) : Observable<Report[]> {
    return this.dbReportRepo.get(withNoActive);
  }

  saveReport(report: Report) : Observable<boolean> {
    return this.dbReportRepo.update(report);
  }

  sendReport(report: Report) : Observable<boolean> {
    return of(true);
  }
}
