import * as models from './models';
export interface Doctor {
    userId?: number;
    userType?: string;
    fullName?: string;
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
    isAfilia?: boolean;
    afiliaId?: number;
    version?: number;
    email?: string;
    password?: string;
    documents?: Array<models.Document>;
    addresses?: Array<models.Address>;
    promotions?: Array<models.Promotion>;
    paymentMethods?: Array<models.PaymentMethod>;
    departments?: Array<models.Department>;
    electronicSignatures?: Array<models.ElectronicSignature>;
    specialtyDetails?: Array<models.SpecialtyDetail>;
    profile?: string;
    medicalLicense?: string;
    workGroup?: Array<models.User>;
}
