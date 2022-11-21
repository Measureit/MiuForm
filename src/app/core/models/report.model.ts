import { DATE_PIPE_DEFAULT_TIMEZONE } from "@angular/common";
import { ChecklistItemConfig } from "./checklist-item-config.model";
import { DbModel } from "./db.model";
import * as uuid from "uuid";
import { FactoryInfoConfig } from "./factory-info-config.model";


//image w reporcie
export class ReportImageItem {
    path: string;
}

//checklist item w reporcie
export class ReportChecklistItem {    
    public static Create(checklistConfig: ChecklistItemConfig) : ReportChecklistItem {
        let res = new ReportChecklistItem();
        res.checklistItemId = checklistConfig._id;
        res.content = checklistConfig.content;
        return res;
    }
    checklistItemId: string; //id z configuracji

    content: string; //przepisany z configuracji (moze sie zmieniac w czasie)
    isChecked: boolean | undefined;    
    comment: string;
    pointImages: ReportImageItem[] = []; //images assigned to checklist item
}

export class Report extends DbModel {
    public static Create(checklist: ChecklistItemConfig[]) : Report {
        let res = new Report();
        res._id = `report_${uuid.v4()}`;
        res.isActive = true;
        res.checklist = checklist.map(x => ReportChecklistItem.Create(x));
        return res;
    }

    dateOfCreation: number = Date.now();
    productId: string;
    factoryInfo: FactoryInfoConfig;
    checklist: ReportChecklistItem[] = [];
    images: ReportImageItem[] = []; 
    reportPath: string; //path do zapisanego pdf'a
    dateOfGenerating: number;
    dateOfDelivery?: number;
}