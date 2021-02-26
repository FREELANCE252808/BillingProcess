import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { HttpUtilsService } from '../utils/http-utils.service';
import { ChangePasswordModel } from '../models/changePassword.model';
import {  Observable,  from } from 'rxjs';

@Injectable()
export class EmailIntigrationService {
	constructor(private http: HttpClient, private httpUtils: HttpUtilsService) {}	

	EmailIntigrationVerify(EmailIntigrationdata: ChangePasswordModel): Observable<any> {
		debugger;	
		return this.http.post<any>("api/User/EmailIntigrationdata", EmailIntigrationdata, this.httpUtils.getHTTPHeader());
	}

	EmailIntigrationSave(EmailIntigrationdata: ChangePasswordModel): Observable<any> {
		debugger;
		return this.http.post<any>("api/User/EmailIntigrationSave", EmailIntigrationdata, this.httpUtils.getHTTPHeader());
	}
	EmailIntigrationverify(EmailIntigrationdata: ChangePasswordModel): Observable<any> {
		debugger;
		return this.http.post<any>("api/User/EmailIntigrationverify", EmailIntigrationdata, this.httpUtils.getHTTPHeader());
	}

	private handleError<T>(operation = 'operation', result?: any) {
		return (error: any): Observable<any> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead
			// Let the app keep running by returning an empty result.
			return from(result);
		};
	}




}


