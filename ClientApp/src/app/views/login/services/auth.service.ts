import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, from, Observable } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = environment.API_URL;
  public onCredentialUpdated$: Subject<any>;

  constructor(private http: HttpClient) {
    this.onCredentialUpdated$ = new Subject();
  }

  // public login(userInfo: User){
  //   localStorage.setItem('ACCESS_TOKEN', "access_token");
  // }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public changePassword(data) {
    // API
  }

  private saveAccessData(accessData: any) {
		debugger;
		if (typeof accessData !== 'undefined') {
			/* this.tokenStorage
				.setAccessToken(accessData["accessData"].accessToken)
				.setuserNameToken(accessData["accessData"].UserName)
				.setuserIDToken(accessData["accessData"].UserID)
				.setCompanyIDToken(accessData["accessData"].CompanyId)
				.setEmailIDToken(accessData["accessData"].EmailID)
				.setRefreshToken(accessData["accessData"].refreshToken)
				.setHODToken(accessData["accessData"].HOD)
				.setDepartmentIDToken(accessData["accessData"].DepartmentID)
				.setUserRoles(accessData["accessData"].roles)
				.setLocalImagePath(accessData["accessData"].ImagePath);
			this.onCredentialUpdated$.next(accessData["accessData"]); */
		}
	}

  public login(credential: any): Observable<any> {
		let params = new HttpParams();
		params.set('email', credential.email);
		params.set('password', credential.password);
		const headers = new HttpHeaders()
			.set("Content-Type", "application/json; charset=utf-8");
		return this.http.post<any>('api/Token/Login', credential, { headers: headers, params: params }).pipe(
			map((result: any) => {
				if (result instanceof Array) {
					return result.pop();
				}
				return result;
			}),
			tap(this.saveAccessData.bind(this)),
			catchError(this.handleError('login', []))
		);
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
