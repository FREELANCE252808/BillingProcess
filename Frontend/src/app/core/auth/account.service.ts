import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AccessData } from './access-data';
import { TokenStorage } from './token-storage.service';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
	API_URL = 'api';
	API_ENDPOINT_LOGIN = '/login';
	API_ENDPOINT_REFRESH = '/refresh';
	API_ENDPOINT_REGISTER = '/register';
	public onCredentialUpdated$: Subject<AccessData>;
  // Need HttpClient to communicate over HTTP with Web API
	constructor(private http: HttpClient, private router: Router,
		private tokenStorage: TokenStorage,
		private util: UtilsService) {
			this.onCredentialUpdated$ = new Subject();
	}


		/**
	 * Check, if user already authorized.
	 * @description Should return Observable with true or false values
	 * @returns {Observable<boolean>}
	 * @memberOf AuthService
	 */
	public isAuthorized(): Observable<boolean> {

		return this.tokenStorage.getAccessToken().pipe(map(token => !!token));
	}
	public getUserRoles(): Observable<any> {

		return this.tokenStorage.getUserRoles();
	}
	public getUserName(): Observable<any> {

		return this.tokenStorage.getUserRoles();
	}

  // Url to access our Web API’s
	private baseUrlRegister: string = '/api/account/register';
	private baseUrlUserName: string = '/api/account/GetUserDetailByUserID';
	private baseUrlRequestPassworde: string ='api/account/RequestPassword?userID='
  // Token Controller
	private baseUrlToken: string = '/api/token/auth';
  // User related properties
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  private UserName = new BehaviorSubject<string>(localStorage.getItem('username'));
  // Login Method
  login(userName: string, password: string) {
    const grantType = 'password';
    // pipe() let you combine multiple functions into a single function.
    // pipe() runs the composed functions in sequence.
    return this.http.post<any>(this.baseUrlToken, { userName, password, grantType }).pipe(
      map(result => {
        // login successful if there's a jwt token in the response
        if (result && result.authToken.token!=null) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.loginStatus.next(true);
			//this.saveAccessData.bind(this);
          this.UserName.next(localStorage.getItem('username'));
        }
        return result;
      }),
	  tap(this.saveAccessData.bind(this)),
	   catchError(this.handleError('login', []))

    );
  }

	GetUserNameByEmailID(userName: string,password:string) {

		// pipe() let you combine multiple functions into a single function.
		// pipe() runs the composed functions in sequence.
		return this.http.post<any>(this.baseUrlUserName, {userName, password}).pipe(
		  map(result => {
			 			return result;
		  },
		error => {
			return error;
		  }
		  ));

	}

  // Register Method
  register(username: string, password: string, email: string) {
    return this.http.post<any>(this.baseUrlRegister, { username, password, email }).pipe(map(result => {
      //registration was successful
      return result;

    }, error => {
      return error;
    }));
  }
	/**
	 * Submit forgot password request
	 * @param {Credential} credential
	 * @returns {Observable<any>}
	 */
	public requestPassword(userID: string): Observable<any> {

		return this.http.get(this.baseUrlRequestPassworde +userID)
			.pipe(catchError(this.handleError('forgot-password', []))
			);
	}
  // Method to get new refresh token
  getNewRefreshToken(): Observable<any> {
    let username = localStorage.getItem('username');
    let refreshToken = localStorage.getItem('refreshToken');
    let grantType = 'refresh_token';
    return this.http.post<any>(this.baseUrlToken, { username, refreshToken, grantType }).pipe(

      map(result => {
        if (result && result.token!=null) {
			this.loginStatus.next(true);
			//this.saveAccessData.bind(this)
		    //this.UserName.next(localStorage.getItem('username'));
        }
        return <any>result;
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

	logout() {
    // Set Loginstatus to false and delete saved jwt cookie
    this.loginStatus.next(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('userame');
    localStorage.removeItem('expiration');
	localStorage.setItem('loginStatus', '0');
	localStorage.removeItem('imagePath');
	localStorage.removeItem('userId',);
    this.router.navigate(['/login']);
    //console.log("Logged Out Successfully");

  }

	checkLoginStatus(): boolean {
		let dateTime = new Date()
		let expirationDate = new Date(localStorage.getItem('expiration'));
      let loginCookie = localStorage.getItem('loginStatus');
		if (loginCookie === '1' && localStorage.getItem('jwt') != null && localStorage.getItem('jwt') != "undefined"
			&& localStorage.getItem('expiration') != null && localStorage.getItem('expiration') != "undefined" &&
			expirationDate>=dateTime	) {
        return true;
      }
        return false;
  }

  get isLoggesIn() {
    return this.loginStatus.asObservable();
  }

  get currentUserName() {
    return this.UserName.asObservable();
  }



  private saveAccessData(accessData: any) {

	if (typeof accessData !== 'undefined') {
		this.tokenStorage
			.setAccessToken(accessData.authToken.token)
			.setuserNameToken(accessData.authToken.userName)
			.setuserIDToken(accessData.authToken.userID)
			.setCompanyIDToken(accessData.authToken.companyId)
			.setRefreshToken(accessData.authToken.refresh_Token)
			.setLocalImagePath(accessData.authToken.imagePath)
			.setUserRoles(accessData.authToken.userRoles)
			.setJwt(accessData.authToken.token)
			.setexpiration(accessData.authToken.expiration)
			.setloginStatus('1');
		this.onCredentialUpdated$.next(accessData);
	}
}

}
