import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { HttpUtilsService } from '../utils/http-utils.service';
import { ChangePasswordModel } from '../models/changePassword.model';
import { BehaviorSubject, Observable, Subject, forkJoin, from, throwError, of } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { AccessData } from '../auth/access-data';
import { Credential } from '../auth/credential';
import { UtilsService } from '../services/utils.service';
import { TokenStorage } from '../auth/token-storage.service';


@Injectable()
export class ChangePasswordService {
	API_ACCOUNT_CHANGE_PWD_URL ='api/Account/ChangeUserPassword';
	API_ACCOUNT_ISVALID_PWD_URL = 'api/Account/IsValidPassword?OldPassword=';
	public onCredentialUpdated$: Subject<AccessData>;

	constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService,
		private tokenStorage: TokenStorage,
		private util: UtilsService) { this.onCredentialUpdated$ = new Subject(); }


	public IsOldPasswordExist(OldPassword: string): Observable<any> {
		debugger;
		return this.http.get<any[]>( this.API_ACCOUNT_ISVALID_PWD_URL+ OldPassword)
			//.pipe(catchError(this.handleError('forgot-password', [])));
	}

	private handleError<T>(operation = 'operation', result?: any) {

		return (error: any): Observable<any> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead
			// Let the app keep running by returning an empty result.
			return from(result);
		};
	}
	ChangePassword(ChangePassword: ChangePasswordModel): Observable<any> {

		const headers = new HttpHeaders().set("Content-Type", "application/json; charset=utf-8");
		return this.http.post<any>(this.API_ACCOUNT_CHANGE_PWD_URL, ChangePassword, this.util.getHTTPHeader()).pipe(
			map((result: any) => {
				if (result instanceof Array) {
					return result.pop();
				}
				return result;
			}),
			//tap(this.saveAccessData.bind(this)),
			catchError(this.handleError('registera', []))
		);
		//return this.http.post<any>("api/User/ChangeUserPassword", ChangePassword, this.httpUtils.getHTTPHeader());

	}





}


