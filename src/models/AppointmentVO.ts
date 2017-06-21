import * as models from './models';
export interface AppointmentVO {
    createDate?: Date;
    dueDate?: Date;
    doctorId?: number;
    patientId?: number;
    status?: string;
    placeId?: number;
}