import { DbModel } from "./db.model";

//checklist item w reporcie
export class ReportChecklistItem {    
    checklistItemId: number; //id z configuracji

    content: string; //przepisany z configuracji (moze sie zmieniac w czasie)
    isChecked: boolean;    
    comment: string;
}

//image w reporcie
export class ReportImageItem {
    path: string;
}
export class Report extends DbModel {
    dateOfCreation: Date;
    factoryInfoId: number;
    checklist: ReportChecklistItem[];
    images: ReportImageItem[];    
    dateOfDelivery?: Date;
}