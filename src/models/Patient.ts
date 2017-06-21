import * as models from './models';
export interface Patient {
    userId?: number;
    userType?: string;
    name?: string;
    lastName?: string;
    secondLastName?: string;
    mobilePhoneNumber?: string;
    workPhone?: string;
    homePhone?: string;
    otherPhone?: string;
    userKey?: string;
    workEmail?: string;
    isAdmin?: string;
    sex?: string;
    createDate?: Date;
    updateDate?: Date;
    version?: number;
    email?: string;
    password?: string;
    documents?: Array<models.Document>;
    addresses?: Array<models.Address>;
    promotions?: Array<models.Promotion>;
    paymentMethods?: Array<models.PaymentMethod>;
    vitalSigns?: Array<models.VitalSign>;
    contacts?: Array<models.Contact>;
}