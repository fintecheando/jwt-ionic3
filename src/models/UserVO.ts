import * as models from './models';
export interface UserVO {
    userId?: number;
    name?: string;
    lastName?: string;
    secondLastName?: string;
    mobilePhoneNumber?: string;
    workPhone?: string;
    homePhone?: string;
    otherPhone?: string;
    email?: string;
    workEmail?: string;
    password?: string;
    isAdmin?: string;
    documents?: Array<models.Document>;
    addresses?: Array<models.Address>;
    promotions?: Array<models.Promotion>;
    paymentMethods?: Array<models.PaymentMethod>;
    vitalSigns?: Array<models.VitalSign>;
    contacts?: Array<models.Contact>;
}
