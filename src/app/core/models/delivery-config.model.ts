import { DbModel } from "./db.model";


export class DeliveryConfig extends DbModel {
    emailServer: string;
    emailServerUser: string;
    emailServerUserPass: string;

    deliveryEmail: string;
}
