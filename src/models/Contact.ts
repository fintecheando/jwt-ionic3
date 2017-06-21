import * as models from './models';
export interface Contact {
    id?: number;
    kin?: string;
    name?: string;
    phoneNumber?: string;
    patient?: models.Patient;
}
