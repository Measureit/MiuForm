import { DbModel } from "./db.model";
import * as uuid from "uuid";


export const CreateChecklistItemConfig = (): ChecklistItemConfig => {
    let res = {} as ChecklistItemConfig;
    res._id = `checklistitem_${uuid.v4()}`;
    res.isActive = true;
    return res;
}
export interface ChecklistItemConfig extends DbModel {
    order: number;
    content: string;
}
