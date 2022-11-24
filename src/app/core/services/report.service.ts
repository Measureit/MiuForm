import { Injectable } from '@angular/core';
import { first, map, mergeMap, Observable, of } from 'rxjs';
import { ChecklistItemConfig, CreateReport, DeliveryConfig, FactoryInfoConfig, Report } from '../models';
import { ConsoleLoggerService, Logger } from './console.logger.service';
import { DBService } from './db.service';
import { ReportGeneratorService } from './report-generator.service';
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
    private logger: Logger,
    private reportGeneratorService: ReportGeneratorService
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
      .pipe(map(x => CreateReport(x)));
  }

  getReport(id: string) : Observable<Report> {
    return this.dbReportRepo.getById(id);
  }
  getReports(withNoActive: boolean) : Observable<Report[]> {
    return this.dbReportRepo.get(withNoActive);
  }

  updateReport(report: Report) : Observable<boolean> {
    return this.dbReportRepo.update(report);
  }

  generateAndSaveReport(report: Report): Observable<Report> {
    return this.dbReportRepo.update(report)
      .pipe(  
        mergeMap(x => this.reportGeneratorService.generatePdf(report)),
        map(pdf => pdf.save('test.pdf')),
        map(x => {
          report.reportPath = 'test.pdf';
          //report.dateOfGenerating = Date.now();
          //return this.dbReportRepo.update(report);
          return true;
        }),
        map(x => report),
        first()
      );
  }

  

  sendReport(report: Report) : Observable<boolean> {
    return of(true);
  }
}
