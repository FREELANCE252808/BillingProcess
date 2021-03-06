import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, BehaviorSubject, throwError } from 'rxjs';
import {
  tap,
  catchError,
  filter,
  take,
  switchMap,
  finalize,
} from 'rxjs/operators';
import { AccountService } from '../views/login/services/account.service';
import { AuthService } from '../views/login/services/auth.service';
import { UtilityService } from '../services/utility.service';

@Injectable({
  providedIn: 'root',
})
export class JwtIntercepterService implements HttpInterceptor {
  private isTokenRefreshing: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor(
    private acct: AccountService,
    private authService: AuthService,
    private utilityService: UtilityService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Check if the user is logging in for the first time
    this.utilityService.startLoading();
    return next.handle(this.attachTokenToRequest(request)).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.utilityService.stopLoading();
        }
      }),
      catchError(
        (err): Observable<any> => {
          this.utilityService.stopLoading();
          if (err instanceof HttpErrorResponse) {
            switch ((<HttpErrorResponse>err).status) {
              case 401:
                return this.handleHttpResponseError(request, next);
              case 400:
                return <any>this.acct.logout();
              case 500:
                alert('Internal error, check db connection.');
            }
          } else {
            return throwError(this.handleError);
          }
        }
      )
    );
  }

  // Global error handler method
  private handleError(errorResponse: HttpErrorResponse) {
    let errorMsg: string;

    if (errorResponse.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMsg = 'An error occured : ' + errorResponse.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMsg = `Backend returned code ${errorResponse.status}, body was: ${errorResponse.error}`;
    }

    return throwError(errorMsg);
  }

  // Method to handle http error response
  private handleHttpResponseError(
    request: HttpRequest<any>,
    next: HttpHandler
  ) {
    // First thing to check if the token is in process of refreshing
    if (!this.isTokenRefreshing) {
      // If the Token Refresheing is not true
      this.isTokenRefreshing = true;
      // Any existing value is set to null
      // Reset here so that the following requests wait until the token comes back from the refresh token API call
      this.tokenSubject.next(null);
      /// call the API to refresh the token
      return this.acct.getNewRefreshToken().pipe(
        switchMap((tokenresponse: any) => {
          if (tokenresponse) {
            this.tokenSubject.next(tokenresponse.authToken.token);

            this.authService.saveAccessData(tokenresponse);
            return next.handle(this.attachTokenToRequest(request));
          }
          return <any>this.acct.logout();
        }),
        catchError((err) => {
          this.acct.logout();
          return this.handleError(err);
        }),
        finalize(() => {
          this.isTokenRefreshing = false;
        })
      );
    } else {
      this.isTokenRefreshing = false;
      return this.tokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((token) => {
          return next.handle(this.attachTokenToRequest(request));
        })
      );
    }
  }

  private attachTokenToRequest(request: HttpRequest<any>) {
    var token = localStorage.getItem('token');
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        // Website you wish to allow to connect
        'Access-Control-Allow-Origin': '*',

        // Request methods you wish to allow
        'Access-Control-Allow-Methods': '*',

        // Request headers you wish to allow
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        //'Access-Control-Allow-Credentials' : true
      },
    });
  }
}
