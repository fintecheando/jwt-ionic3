import * as models from './models';
export interface ShiftDetail {
    id?: number;
    shift?: models.Shift;
    institution?: models.MedicalInstitution;
    startDate?: Date;
    finishDate?: Date;
}
