import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpUtilsService } from '../utils/http-utils.service';
import { RoleModel } from '../models/role.model';
import { QueryParamsModel } from '../models/query-models/query-params.model';
import { QueryResultsModel } from '../models/query-models/query-results.model';

const API_GET_ROLE_URL = 'api/Role/GetRoles';
const API_ADD_UPDATE_ROLE_URL = 'api/Role/AddEditRole';
const API_DELETE_ROLE_URL = 'api/Role/DeleteRole?roleID=';
const API_GET_ROLEByID_URL = 'api/Role/GetRoleByRoleID?roleID=';
Treedata: [];

@Injectable()
export class RoleService {
	constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService) { }


	// Get role
	getAllRole(): Observable<RoleModel[]> {
		return this.http.get<RoleModel[]>(API_GET_ROLE_URL);
	}
	// UPDATE/ADD  => PUT: Create the Role on the server
	AddEditRole(role: RoleModel): Observable<any> {
		return this.http.post<RoleModel>(API_ADD_UPDATE_ROLE_URL, role, this.httpUtils.getHTTPHeader());
	}
	// get the Role on the server
	GetRoleByRoleID(roleID: number): Observable<any> {
		return this.http.get<RoleModel>(API_GET_ROLEByID_URL+roleID);
	}

	// DELETE => delete the customer from the server
	deleteRole(RoleID: number): Observable<any> {
		return this.http.delete<RoleModel[]>( API_DELETE_ROLE_URL+ RoleID);
	}


	// Get role access permission
	getRoleAccessPermission(roleId: any): Observable<any> {
		return this.http.get<any>("api/RoleRights/GetRoleRights?roleID=" + roleId, this.httpUtils.getHTTPHeader());
		}



	// UPDATE => PUT: update the Role on the server
	updateRoleRights(RoleRightsResDto: any, RoleID: any): Observable<any> {
		debugger;
		const RoleRightsReqDto = {
			RoleRightsResDto,
			RoleID
		}
		return this.http.post<RoleModel[]>("api/RoleRights/AddRoleRights", RoleRightsReqDto, this.httpUtils.getHTTPHeader());
	}
	// Method imitates server calls which deletes items from DB (should rewrite this to real server call)
	// START


	deleteRoles(ids: string) {
		debugger;
		return this.http.delete<RoleModel[]>("api/Role/DeleteSelected?PkID=" + ids)
	}




	// Method from server should return QueryResultsModel(any[], totalsCount: number)
	findRole(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		const params = this.httpUtils.getFindHTTPParams(queryParams);

		// Comment this when you start work with real server
		// This code imitates server calls
		// START
		debugger
		var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
		return this.http.get<RoleModel[]>(API_GET_ROLE_URL).pipe(
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


