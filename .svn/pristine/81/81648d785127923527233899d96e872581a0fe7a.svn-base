import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpUtilsService } from '../utils/http-utils.service';
import { ProfileModel } from '../models/profile.model';
import { QueryParamsModel } from '../models/query-models/query-params.model';
import { QueryResultsModel } from '../models/query-models/query-results.model';

//const API_ROLE_URL = 'api/role';

@Injectable()
export class ProfileService {
	constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService) { }


	// Get role
	getAllProfile(): Observable<ProfileModel[]> {
		debugger;
		return this.http.get<ProfileModel[]>("api/Profile/GetProfile");
	}
	// UPDATE => PUT: update the Role on the server
	updateProfile(profile: ProfileModel): Observable<any> {	
		return this.http.put<ProfileModel[]>("api/Role/Update", profile, this.httpUtils.getHTTPHeader());
	}

	// UPDATE => PUT: Create the Role on the server
	CreateProfile(profile: ProfileModel): Observable<any> {	
		return this.http.post<ProfileModel[]>("api/Role/CreateRole", profile, this.httpUtils.getHTTPHeader());
	}

	// DELETE => delete the customer from the server
	deleteProfile(ProfileID: number): Observable<any> {
		debugger;
		return this.http.delete<ProfileModel[]>("api/Role/Delete?RoleID=" + ProfileID);
	}

	// Method imitates server calls which deletes items from DB (should rewrite this to real server call)
	// START


	deleteProfiles(ids: number[] = []) {
		debugger;
		// Comment this when you start work with real server
		// This code imitates server calls
		// START
		const tasks$ = [];
		const length = ids.length;
		for (let i = 0; i < length; i++) {
			tasks$.push(this.deleteProfile(ids[i]));
		}
		return forkJoin(tasks$);
		// END

		// Uncomment this when you start work with real server
		// Note: Add headers if needed
		// START
		// const url = this.API_CUSTOMERS_URL + '/delete';
		// return this.http.get<QueryResultsModel>(url, { params: ids });
		// END
	}




	//Method from server should return QueryResultsModel(any[], totalsCount: number)
	findProfile(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		debugger; 
		const params = this.httpUtils.getFindHTTPParams(queryParams);

		// Comment this when you start work with real server
		// This code imitates server calls
		// START
		debugger
		//const url = API_ROLE_URL;
		var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
		return this.http.get<ProfileModel[]>("api/Profile/GetProfile").pipe(
			mergeMap(res => of(new QueryResultsModel(res)))
		);
		// END

		// Uncomment this when you start work with real server
		// Note: Add headers if needed
		// START
		// const url = this.API_CUSTOMERS_URL + '/find';
		// return this.http.get<QueryResultsModel>(url, params);
		// END
	}

}


