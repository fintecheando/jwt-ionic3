import * as models from './models';
export interface Document {
    id?: number;
    description?: string;
    uploadDate?: Date;
    document?: string;
}