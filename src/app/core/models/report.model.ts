import { ChecklistItemConfig } from "./checklist-item-config.model";
import { DbModel } from "./db.model";
import * as uuid from "uuid";
import { FactoryInfoConfig } from "./factory-info-config.model";

export class ImageSize {
    width: number;
    height: number;
}
//image w reporcie
export class ReportImageItem {
    blob: Blob;
    size: ImageSize;
}

//checklist item w reporcie
export class ReportChecklistItem {    
    public static Create(checklistConfig: ChecklistItemConfig) : ReportChecklistItem {
        let res = new ReportChecklistItem();
        res.checklistItemId = checklistConfig._id;
        res.content = checklistConfig.content;
        res.order = checklistConfig.order;
        return res;
    }

    checklistItemId: string; //id z configuracji
    content: string; //przepisany z configuracji (moze sie zmieniac w konfiguracji po wygeneroaniu raportu)
    isChecked: boolean | undefined;    
    comment: string;
    order: number; //przepisany z configuracji (moze sie zmieniac w konfiguracji po wygeneroaniu raportu)
    pointImages: ReportImageItem[] = []; //images assigned to checklist item
}

export const CreateReport = (checklist: ChecklistItemConfig[]) : Report => {
    let res = {} as Report;
    res._id = `report_${uuid.v4()}`;
    res.isActive = true;
    res.checklist = checklist.map(x => ReportChecklistItem.Create(x));
    res.dateOfCreation = Date.now();
    res.checklist = [];
    res.images = []; 
    return res;
}

export interface Report extends DbModel {
    

    dateOfCreation: number;
    productName: string;
    productColor: string;
    productId: string;
    comment: string;
    factoryInfoId: string;
    checklist: ReportChecklistItem[];
    images: ReportImageItem[]; 
    reportPath: string; //path do zapisanego pdf'a
    //dateOfGenerating: number;

    dateOfDelivery?: number;
}