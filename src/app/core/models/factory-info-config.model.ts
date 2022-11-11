import { DbModel } from "./db.model";
import * as uuid from "uuid";

export class FactoryInfoConfig extends DbModel {
    public static Create(): FactoryInfoConfig {
        let res = new FactoryInfoConfig();
        res._id = `factory_${uuid.v4()}`;
        res.isActive = true;
        return res;
    }
    order: number;

    shortName: string;
    name: string;
    address: string;
}
