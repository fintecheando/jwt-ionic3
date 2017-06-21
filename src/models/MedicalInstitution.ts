import * as models from './models';
export interface MedicalInstitution {
    institutionId?: number;
    addresses?: Array<models.Address>;
    name?: string;
    user?: Array<models.User>;
    version?: number;
}
