import * as models from './models';
export interface DiseaseVO {
    description?: string;
    dateSymptom?: Date;
    dateVisitDoctor?: Date;
    dateReport?: Date;
    signalAndSymptom?: string;
    relatedToOther?: boolean;
    relatedComments?: string;
    comments?: string;
    diseaseType?: models.DiseaseType;
}
