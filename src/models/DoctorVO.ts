import * as models from './models';
export interface DoctorVO {
    department?: models.Department;
    specialityId?: number;
    profile?: string;
    medicalLicense?: string;
    appointments?: Array<models.Appointment>;
}
