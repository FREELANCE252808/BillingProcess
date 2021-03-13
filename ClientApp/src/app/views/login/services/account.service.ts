import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AccessData } from './access-data';
import { TokenStorage } from './token-storage.service';
import { UtilsService } from '../services/utils.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public onCredentialUpdated$: Subject<AccessData>;
  baseapiURL = environment.API_URL;
  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenStorage: TokenStorage,
    private util: UtilsService
  ) {
    this.onCredentialUpdated$ = new Subject();
  }

  // User related properties
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  private UserName = new BehaviorSubject<string>(
    localStorage.getItem('username')
  );
  // Login Method
  login(login) {
    const grantType = 'password';
    // pipe() let you combine multiple functions into a single function.
    // pipe() runs the composed functions in sequence.
    return this.http.post<any>(`${this.baseapiURL}Token/Login`, login).pipe(
      map((result) => {
        // login successful if there's a jwt token in the response
        if (result && result.authToken.token != null) {
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

  // Method to get new refresh token
  getNewRefreshToken(): Observable<any> {
    let userName = localStorage.getItem('firstName');
    let refreshToken = localStorage.getItem('refreshToken');
    let grantType = 'refresh_token';
    return this.http
      .post<any>(`${this.baseapiURL}api/Token/Login`, { userName, grantType })
      .pipe(
        map((result) => {
          if (result && result.token != null) {
            this.loginStatus.next(true);
            this.saveAccessData.bind(this);
            this.UserName.next(localStorage.getItem('firstName'));
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
    localStorage.removeItem('token');
    localStorage.removeItem('loginStatus');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('companyID');
    localStorage.removeItem('userID');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    this.router.navigate(['/login']);
  }

  checkLoginStatus(): boolean {
    let dateTime = new Date();
    let expirationDate = new Date(localStorage.getItem('expiration'));
    let loginStatus = localStorage.getItem('loginStatus');
    if (
      loginStatus &&
      localStorage.getItem('token') != null &&
      localStorage.getItem('token') != 'undefined' &&
      localStorage.getItem('expiration') != null &&
      localStorage.getItem('expiration') != 'undefined' &&
      expirationDate >= dateTime
    ) {
      return true;
    }
    return false;
  }

  public saveAccessData(accessData: any) {
    if (typeof accessData !== 'undefined') {
      this.tokenStorage
        .settoken(accessData.authToken.token)
        .setuserFirstName(accessData.authToken.firstName)
        .setuserLastName(accessData.authToken.lastName)
        .setuserID(accessData.authToken.userID)
        .setisAdmin(accessData.authToken.isAdmin)
        .setexpiration(accessData.authToken.expiration)
        .setRefreshToken(accessData.authToken.RefreshToken)
        .setloginStatus(true);
      this.onCredentialUpdated$.next(accessData.authToken);
    }
  }
}
