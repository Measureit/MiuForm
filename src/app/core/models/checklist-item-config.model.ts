import { DbModel } from "./db.model";
import * as uuid from "uuid";


export class ChecklistItemConfig extends DbModel {
    public static Create(): ChecklistItemConfig {
        let res = new ChecklistItemConfig();
        res._id = `factory_${uuid.v4()}`;
        res.isActive = true;
        return res;
    }
    
    order: number;
    content: string;
}
