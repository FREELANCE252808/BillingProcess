import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpUtilsService } from '../utils/http-utils.service';
import { CompanyProfileModel } from '../models/companyProfile.model';
import { QueryParamsModel } from '../models/query-models/query-params.model';
import { QueryResultsModel } from '../models/query-models/query-results.model';


@Injectable()
export class CompanyProfileService {
	constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService) { }

	// READ
	getAllCompanyProfile(): Observable<CompanyProfileModel[]> {
		debugger;
		return this.http.get<CompanyProfileModel[]>("api/CompanyProfile/GetCompanyProfiles");
	}

	// UPDATE => PUT: update the customer on the server
	updateCompanyProfile(companyProfile: CompanyProfileModel): Observable<any> {
		return this.http.put("api/CompanyProfile/Update", companyProfile, this.httpUtils.getHTTPHeader());
	}

	// CREATE =>  POST: add a new Department to the server
	createCompanyProfile(companyProfile: CompanyProfileModel): Observable<CompanyProfileModel> {
		return this.http.post<CompanyProfileModel>("api/CompanyProfile/CreateCompanyProfile", companyProfile, this.httpUtils.getHTTPHeader());
	}

	deleteCompanyProfile(ProfileID: any): Observable<any> {
		debugger;
		return this.http.delete<CompanyProfileModel[]>("api/CompanyProfile/Delete?ProfileID=" + ProfileID);
	}

	// Get Profile access Permission
	getProfileAccessPermission(ProfileID: any): Observable<any> {
		debugger;
		return this.http.get<any>("api/MenuHeader/GetMenuRightByProfile?ProfileID=" + ProfileID, this.httpUtils.getHTTPHeader());
	}

	// UPDATE => PUT: update the Role on the server
	updateProfileRights(data: any, ProfileID: any): Observable<any> {
		debugger;
		
		return this.http.get<any[]>("api/MenuHeader/UpdateProfileRights?ModuleIDs=" + data + "&profileID=" + ProfileID, this.httpUtils.getHTTPHeader());
	}

}


