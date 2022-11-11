import { DATE_PIPE_DEFAULT_TIMEZONE } from "@angular/common";
import { ChecklistItemConfig } from "./checklist-item-config.model";
import { DbModel } from "./db.model";

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
    isChecked: boolean;    
    comment: string;
}

//image w reporcie
export class ReportImageItem {
    path: string;
}
export class Report extends DbModel {
    public static Create(checklist: ChecklistItemConfig[]) : Report {
        let res = new Report();
        res.checklist = checklist.map(x => ReportChecklistItem.Create(x));
        return res;
    }

    dateOfCreation: number = Date.now();
    factoryInfoId: number;
    checklist: ReportChecklistItem[] = [];
    images: ReportImageItem[] = [];    
    dateOfDelivery?: number;
}