import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TokenStorage {


  //get in local storage

	public getAccessToken(): Observable<string> {
		const token: string = <string>localStorage.getItem('token');
		return of(token);
	}

	public getloginStatus(): Observable<string> {
		const token: string = <string>localStorage.getItem('loginStatus');
		return of(token);
	}


	public getrefreshToken(): Observable<string> {
		const token: string = <string>localStorage.getItem('refreshToken');
		return of(token);
	}


	public getisAdmin(): Observable<any> {
    const token: any = localStorage.getItem('isAdmin');
			return of(token);
	}


	public getcompanyID(): Observable<string> {
		const token: string = <string>localStorage.getItem('companyID');
		return of(token);
	}


	public getuserID(): Observable<string> {
		const token: string = <string>localStorage.getItem('userID');
		return of(token);
	}


	public getfirstName(): Observable<string> {
		const token: string = <string>localStorage.getItem('firstName');
		return of(token);
	}


	public getlastName(): Observable<string> {
		const token: string = <string>localStorage.getItem('lastName');
		return of(token);
	}











  //Set in local storage

	public setloginStatus(loginStatus: any): TokenStorage {
		localStorage.setItem('loginStatus', loginStatus);
		return this;
	}
	public setexpiration(expiration: string): TokenStorage {
		localStorage.setItem('expiration', expiration);
		return this;
	}
	public setuserLastName(userLastName: string): TokenStorage {
		localStorage.setItem('lastName', userLastName);
		return this;
	}
	public setuserFirstName(userFirstName: string): TokenStorage {
		localStorage.setItem('firstName', userFirstName);
		return this;
	}
	public setuserID(userID: string): TokenStorage {
		localStorage.setItem('userID', userID);
		return this;
	}
	public setCompanyID(CompanyID: string): TokenStorage {
		localStorage.setItem('companyID', CompanyID);
		return this;
	}

	public setRefreshToken(RefreshToken: string): TokenStorage {
		localStorage.setItem('refreshToken', RefreshToken);
		return this;
	}
	public setisAdmin(isAdmin: string): TokenStorage {
		localStorage.setItem('isAdmin', isAdmin);
		return this;
	}
  public settoken(token: string): TokenStorage {
		localStorage.setItem('token', token);
		return this;
	}

	public clear() {
		localStorage.removeItem('lastName');
    localStorage.removeItem('firstName');
		localStorage.removeItem('userID');
		localStorage.removeItem('companyID');
		localStorage.removeItem('isAdmin');
		localStorage.removeItem('token');
		localStorage.removeItem('refreshToken');
    localStorage.removeItem('loginStatus');
    localStorage.removeItem('expiration');

	}
}
