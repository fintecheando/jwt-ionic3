import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models from '../models/models';
import { BASE_PATH, COLLECTION_FORMATS } from '../app/variables';
import { Configuration } from '../app/configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class UserProfileService {
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

    public getCountries(): Promise<models.Countries[]> {
        return this.http.get('./assets/catalogs/countries.json')
            .toPromise()
            .then(response => response.json().countries as models.Countries[])
            .catch(this.handleError);
    }

    public getSpecialities(): Promise<models.Specialities[]> {
        return this.http.get('./assets/catalogs/specialities.json')
            .toPromise()
            .then(response => response.json().specialities as models.Specialities[])
            .catch(this.handleError);
    }

    public getSubSpecialities(): Promise<models.SubSpecialities[]> {
        return this.http.get('./assets/catalogs/subspecialities.json')
            .toPromise()
            .then(response => response.json().subspecialities as models.SubSpecialities[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    public getAllUsers(extraHttpRequestParams?: any): Observable<{}> {
        return this.getAllUsersWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Retrive a user identified by Field
     * retrive a user by one or many  their properties
     * @param email user email
     * @param name name
     * @param lastName user lastName
     * @param secondLastName user secondLastName
     */
    //public getUser(email?: string, name?: string, lastName?: string, secondLastName?: string, extraHttpRequestParams?: any): Observable<models.UserVO> {
    public getUser(email?: string, name?: string, lastName?: string, secondLastName?: string, extraHttpRequestParams?: any): Observable<any> {
        return this.getUserWithHttpInfo(email, name, lastName, secondLastName, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Retrive a user identified by ID
     * return a user
     * @param id name that need to be updated
     */
    public getUserById(id: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.getUserByIdWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Loggin operation
     * This operation receive an email or phone number(both is valid) and password 
     * @param password user password
     * @param email user email as identifier
     * @param mobilePhoneNumber user phone number as identifier
     */
    public login(password: string, email?: string, mobilePhoneNumber?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.loginWithHttpInfo(password, email, mobilePhoneNumber, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Reset user password
     * reset user password with user&#39;s phone number or email as identifier
     * @param id user id
     * @param body 
     */
    public resetUser(id: number, body?: models.UserResetVO, extraHttpRequestParams?: any): Observable<{}> {
        return this.resetUserWithHttpInfo(id, body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Reset user password
     * reset user password with user&#39;s phone number or email as identifier
     * @param id user id
     * @param body 
     */
    public updateUser(id: number, body?: models.User, extraHttpRequestParams?: any): Observable<{}> {
        return this.updateUserWithHttpInfo(id, body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Retrive all users from the DB
     * Return a list with all users into the DB
     */
    public getAllUsersWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/usersProfile`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
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
     * Retrive a user identified by Field
     * retrive a user by one or many  their properties
     * @param email user email
     * @param name name
     * @param lastName user lastName
     * @param secondLastName user secondLastName
     */
    public getUserWithHttpInfo(email?: string, name?: string, lastName?: string, secondLastName?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/usersProfile/query`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (email !== undefined) {
            /*if(email instanceof Date) {
                queryParameters.set('email', <any>email.d.toISOString());
            } else {*/
            queryParameters.set('email', <any>email);
            //}
        }

        if (name !== undefined) {
            /*if(name instanceof Date) {
                queryParameters.set('name', <any>name.d.toISOString());
            } else {*/
            queryParameters.set('name', <any>name);
            //}
        }

        if (lastName !== undefined) {
            /*if(lastName instanceof Date) {
                queryParameters.set('lastName', <any>lastName.d.toISOString());
            } else {*/
            queryParameters.set('lastName', <any>lastName);
            //}
        }

        if (secondLastName !== undefined) {
            /*if(secondLastName instanceof Date) {
                queryParameters.set('secondLastName', <any>secondLastName.d.toISOString());
            } else {*/
            queryParameters.set('secondLastName', <any>secondLastName);
            //}
        }

        // to determine the Content-Type header
        let consumes: string[] = [
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
     * Retrive a user identified by ID
     * return a user
     * @param id name that need to be updated
     */
    public getUserByIdWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/usersProfile/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getUserById.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
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
     * Loggin operation
     * This operation receive an email or phone number(both is valid) and password 
     * @param password user password
     * @param email user email as identifier
     * @param mobilePhoneNumber user phone number as identifier
     */
    public loginWithHttpInfo(password: string, email?: string, mobilePhoneNumber?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/usersProfile/login`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'password' is not null or undefined
        if (password === null || password === undefined) {
            throw new Error('Required parameter password was null or undefined when calling login.');
        }
        if (email !== undefined) {
            /*if(email instanceof Date) {
                queryParameters.set('email', <any>email.d.toISOString());
            } else {*/
            queryParameters.set('email', <any>email);
            //}
        }

        if (mobilePhoneNumber !== undefined) {
            /*if(mobilePhoneNumber instanceof Date) {
                queryParameters.set('mobilePhoneNumber', <any>mobilePhoneNumber.d.toISOString());
            } else {*/
            queryParameters.set('mobilePhoneNumber', <any>mobilePhoneNumber);
            //}
        }

        if (password !== undefined) {
            /*if(password instanceof Date) {
                queryParameters.set('password', <any>password.d.toISOString());
            } else {*/
            queryParameters.set('password', <any>password);
            //}
        }

        // to determine the Content-Type header
        let consumes: string[] = [
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
     * Reset user password
     * reset user password with user&#39;s phone number or email as identifier
     * @param id user id
     * @param body 
     */
    public resetUserWithHttpInfo(id: number, body?: models.UserResetVO, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/usersProfile/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling resetUser.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Patch,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Reset user password
     * reset user password with user&#39;s phone number or email as identifier
     * @param id user id
     * @param body 
     */
    public updateUserWithHttpInfo(id: number, body?: models.User, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/usersProfile/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUser.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
