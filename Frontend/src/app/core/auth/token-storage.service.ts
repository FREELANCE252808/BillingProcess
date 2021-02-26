import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TokenStorage {
	/**
	 * Get access token
	 * @returns {Observable<string>}
	 */
	public getAccessToken(): Observable<string> {
		const token: string = <string>localStorage.getItem('accessToken');
		return of(token);
	}

	/**
	 * Get refresh token
	 * @returns {Observable<string>}
	 */
	public getRefreshToken(): Observable<string> {
		const token: string = <string>localStorage.getItem('refreshToken');
		return of(token);
	}
	public getUserName(): Observable<string> {
		const token: string = <string>localStorage.getItem('userame');
		return of(token);
	}
	
	/**
	 * Get user roles in JSON string
	 * @returns {Observable<any>}
	 */
	public getUserRoles(): Observable<any> {
		const roles: any = localStorage.getItem('userRoles');
		try {
			return of(JSON.parse(roles));
		} catch (e) { }
	}

	/**
	 * Set access token
	 * @returns {TokenStorage}
	 */
	public setAccessToken(token: string): TokenStorage {
		localStorage.setItem('accessToken', token);

		return this;
	}
	public setJwt(token: string): TokenStorage {
		localStorage.setItem('jwt', token);

		return this;
	}
	public setloginStatus(token: string): TokenStorage {
		localStorage.setItem('loginStatus', token);

		return this;
	}
	public setexpiration(token: string): TokenStorage {
		localStorage.setItem('expiration', token);

		return this;
	}


	public setuserNameToken(token: string): TokenStorage {
		localStorage.setItem('userame', token);

		return this;
	}




	public setuserIDToken(token: string): TokenStorage {
		localStorage.setItem('userid', token);

		return this;
	}
	public setCompanyIDToken(token: string): TokenStorage {
		localStorage.setItem('CompanyID', token);
		return this;
	}

	public setEmailIDToken(token: string): TokenStorage {
		localStorage.setItem('EmailID', token);
		return this;
	}

	public setDepartmentIDToken(token: string): TokenStorage {
		localStorage.setItem('DepartmentID', token);
		return this;
	}
	public setLocalImagePath(token: string): TokenStorage {
		localStorage.setItem('imagePath', token);
		return this;
	}

	public setHODToken(token: string): TokenStorage {
		localStorage.setItem('HOD', token);
		return this;
	}

	/**
	 * Set refresh token
	 * @returns {TokenStorage}
	 */
	public setRefreshToken(token: string): TokenStorage {
		localStorage.setItem('refreshToken', token);

		return this;
	}

	/**
	 * Set user roles
	 * @param roles
	 * @returns {TokenStorage}
	 */
	public setUserRoles(roles: any): any {
		if (roles != null) {
			localStorage.setItem('userRoles', JSON.stringify(roles));
		}

		return this;
	}

	/**
	 * Remove tokens
	 */
	public clear() {
		localStorage.removeItem('UserName');
		localStorage.removeItem('UserID');
		localStorage.removeItem('CompanyID');
		localStorage.removeItem('DepartmentID');
		localStorage.removeItem('ImagePath');
		localStorage.removeItem('HOD');
		localStorage.removeItem('EmailID');
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		localStorage.removeItem('userRoles');
	}
}
