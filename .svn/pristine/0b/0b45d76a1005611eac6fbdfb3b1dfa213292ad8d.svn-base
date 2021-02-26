import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpUtilsService } from '../utils/http-utils.service';
import { CompanysModel } from '../models/companys.model';
import { QueryParamsModel } from '../models/query-models/query-params.model';
import { QueryResultsModel } from '../models/query-models/query-results.model';

const API_USERS_URL = 'api/companys';

@Injectable()
export class CompanysService {
	constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService) { }
	// READ
	getCompanyDetail(): Observable<any> {
		debugger;
		return this.http.get<any>("api/CompanyMaster/GetCompanyDetails");
	}
	UploadCompanyLogo(formData: any): Observable<any> {
		return this.http.post<any>("api/CompanyMaster/UploadCompanyLogo", formData);
	}
		// UPDATE => PUT: update the customer on the server
		updateCompany(companyData: CompanysModel): Observable<any> {
			return this.http.post<any>("api/CompanyMaster/AddEditCompanyDetails", companyData, this.httpUtils.getHTTPHeader());
		}


	// Method from server should return QueryResultsModel(any[], totalsCount: number)
	findCompanys(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		const params = this.httpUtils.getFindHTTPParams(queryParams);

		// Comment this when you start work with real server
		// This code imitates server calls
		// START
		const url = API_USERS_URL;
		return this.http.get<CompanysModel[]>(API_USERS_URL).pipe(
			mergeMap(res => of(new QueryResultsModel(res)))
		);
	}


}
