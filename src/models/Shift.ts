import * as models from './models';
export interface Shift {
    id?: number;
    description?: string;
    shortDescription?: string;
    startTime?: Date;
    finishTime?: Date;
}
