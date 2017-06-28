import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BASE_PATH, COLLECTION_FORMATS } from '../app/variables';
import { Configuration } from '../app/configuration';
import * as models from '../models/models';


@Injectable()
export class AppointmentService {
    protected basePath = 'http://afiliamedica.bitnamiapp.com:8080/v1';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    public createAppointment(body?: models.Appointment, extraHttpRequestParams?: any): Observable<{}> {
        return this.createAppointmentWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    public getAppointmentById(id: number, extraHttpRequestParams?: any): Observable<models.AppointmentCVO> {
        return this.getAppointmentByIdWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    //public getAppointment(userId?: string, startDate?: string, endDate?: string, from?: string, to?: string, extraHttpRequestParams?: any): Observable<models.AppointmentCVO> {
    public getAppointment(userId?: string, startDate?: string, endDate?: string, from?: string, to?: string, extraHttpRequestParams?: any): Observable<any> {        
        return this.getAppointmentWithHttpInfo(userId, startDate, endDate, from, to, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    public createAppointmentWithHttpInfo(body?: models.Appointment, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/appointments';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON());
        let consumes: string[] = [
            'application/json'
        ];
        let produces: string[] = [
            'application/json'
        ];
        headers.set('Content-Type', 'application/json');
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }

    public getAppointmentByIdWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/appointments/${id}';
        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON());
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getAppointmentById.');
        }
        let consumes: string[] = [
            'application/json'
        ];
        let produces: string[] = [
            'application/json'
        ];
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }

    public getAppointmentWithHttpInfo(userId?: string, startDate?: string, endDate?: string, from?: string, to?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/appointments/query`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (userId !== undefined) {
            queryParameters.set('userID', <any>userId);
        }

        if (startDate !== undefined) {
            queryParameters.set('startDate', <any>startDate);
        }

        if (endDate !== undefined) {
            queryParameters.set('endDate', <any>endDate);
        }

        if (from !== undefined) {
            queryParameters.set('from', <any>from);
        }

        if (to !== undefined) {
            queryParameters.set('to', <any>to);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
