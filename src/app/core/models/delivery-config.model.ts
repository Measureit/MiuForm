import { DbModel } from "./db.model";
import * as uuid from "uuid";

export const CreateDeliveryConfig = (): DeliveryConfig => {
    let res = {} as DeliveryConfig;
    res._id = `delivery_${uuid.v4()}`;
    res.isActive = true;
    res.deliveryEmails = [];
    return res;
}
export interface DeliveryConfig extends DbModel {
    
    emailServerSecretCode: string;

    fromUser: string; //email from -> email sender
    deliveryEmails: string[]; //emails -> each report will be send to this list of recieviers (+ factory recievers)
}
