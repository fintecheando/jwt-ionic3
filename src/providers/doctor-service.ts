import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../models/models';
import { BASE_PATH, COLLECTION_FORMATS } from '../app/variables';
import { Configuration } from '../app/configuration';

/* tslint:disable:no-unused-variable member-ordering */

@Injectable()
export class DoctorService {
    protected basePath = 'http://afiliamedica.bitnamiapp.com:8080/v1';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * Retrieve a doctor by ID
     * Retrieve a doctor by ID
     * @param id Doctor id
     */
    public getById(id: number, extraHttpRequestParams?: any): Observable<models.DoctorVO> {
        return this.getByIdWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Retrieve a doctor by ID
     * Retrieve a doctor by ID
     * @param id Speciality id
     * @param from 
     * @param to 
     * @param orderBy 
     */
    public getBySpeciality(id: number, from?: number, to?: number, orderBy?: Array<string>, extraHttpRequestParams?: any): Observable<models.DoctorVO> {
        return this.getBySpecialityWithHttpInfo(id, from, to, orderBy, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Save a doctor
     * Save a doctor into the DB
     * @param body 
     */
    public save(body?: models.Doctor, extraHttpRequestParams?: any): Observable<{}> {
        return this.saveWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Retrieve a doctor by ID
     * Retrieve a doctor by ID
     * @param id Doctor id
     */
    public getByIdWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/doctors/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getById.');
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

    /**
     * Retrieve a doctor by ID
     * Retrieve a doctor by ID
     * @param id Speciality id
     * @param from 
     * @param to 
     * @param orderBy 
     */
    public getBySpecialityWithHttpInfo(id: number, from?: number, to?: number, orderBy?: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/doctors/query`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getBySpeciality.');
        }
        if (id !== undefined) {
                queryParameters.set('id', <any>id);
        }

        if (from !== undefined) {
                queryParameters.set('from', <any>from);
        }

        if (to !== undefined) {
                queryParameters.set('to', <any>to);
        }

        if (orderBy) {
            orderBy.forEach((element) => {
                queryParameters.append('orderBy', <any>element);
            })
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

    /**
     * Save a doctor
     * Save a doctor into the DB
     * @param body 
     */
    public saveWithHttpInfo(body?: models.Doctor, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/doctors`;

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

}