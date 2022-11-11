import { DbModel } from "./db.model";


export class FactoryInfoConfig extends DbModel {
    order: number;

    shortName: string;
    name: string;
    address: string;
}
