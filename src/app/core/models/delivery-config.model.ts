import { DbModel } from "./db.model";
import * as uuid from "uuid";


export class DeliveryConfig extends DbModel {
    public static Create(): DeliveryConfig {
        let res = new DeliveryConfig();
        res._id = `delivery_${uuid.v4()}`;
        res.isActive = true;
        return res;
    }
    emailServerSecretCode: string;

    fromUser: string; //email from -> email sender
    deliveryEmails: string[] = []; //emails -> each report will be send to this list of recieviers (+ factory recievers)
}
