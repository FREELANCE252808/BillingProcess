import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, from, Observable } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { TokenStorage } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL = environment.API_URL;
  public onCredentialUpdated$: Subject<any>;

  constructor(private http: HttpClient, private tokenStorage: TokenStorage) {
    this.onCredentialUpdated$ = new Subject();
  }

  // public login(userInfo: User){
  //   localStorage.setItem('ACCESS_TOKEN', "access_token");
  // }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public changePassword(data) {
    // API
  }

  public saveAccessData(accessData: any) {
    if (typeof accessData !== 'undefined') {
      this.tokenStorage
        .settoken(accessData['accessData'].token)
        .setuserFirstName(accessData['accessData'].firstName)
        .setuserLastName(accessData['accessData'].lastName)
        .setuserID(accessData['accessData'].UserID)
        .setCompanyID(accessData['accessData'].CompanyId)
        .setisAdmin(accessData['accessData'].isAdmin)
        .setexpiration(accessData['accessData'].expiration)
        .setRefreshToken(accessData['accessData'].RefreshToken)
        .setloginStatus(true);
      this.onCredentialUpdated$.next(accessData['accessData']);
    }
  }

  public login(credential: any): Observable<any> {
    let params = new HttpParams();
    params.set('email', credential.email);
    params.set('password', credential.password);
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.http
      .post<any>('api/Token/Login', credential, {
        headers: headers,
        params: params,
      })
      .pipe(
        map((result) => {
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
