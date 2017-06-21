import * as models from './models';
export interface VitalSign {
    id?: number;
    height?: number;
    weight?: number;
    pressure?: string;
    heartRate?: string;
    breathRate?: string;
    oxigenLevel?: string;
    updateDate?: Date;
    patient?: models.Patient;
}
