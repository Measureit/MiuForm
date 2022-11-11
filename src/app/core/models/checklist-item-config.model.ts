import { DbModel } from "./db.model";


export class ChecklistItemConfig extends DbModel {
    order: number;
    content: string;
}
