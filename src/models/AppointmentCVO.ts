import * as models from './models';
export interface AppointmentCVO {
    createDate?: Date;
    dueDate?: Date;
    status?: string;
    placeId?: number;
    hospital?: models.MedicalInstitution;
    patient?: models.Patient;
    doctor?: models.Doctor;
}
