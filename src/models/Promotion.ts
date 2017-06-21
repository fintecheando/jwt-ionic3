import * as models from './models';
export interface Promotion {
    id?: number;
    status?: string;
    description?: string;
    createDate?: Date;
    dueDate?: Date;
}
