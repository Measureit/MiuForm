import { DbModel } from "./db.model";
import * as uuid from "uuid";


export class DeliveryConfig extends DbModel {
    public static Create(): DeliveryConfig {
        let res = new DeliveryConfig();
        res._id = `factory_${uuid.v4()}`;
        res.isActive = true;
        return res;
    }
    emailServer: string;
    emailServerUser: string;
    emailServerUserPass: string;

    deliveryEmail: string;
}
