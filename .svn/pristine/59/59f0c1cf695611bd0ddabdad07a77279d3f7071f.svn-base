import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpUtilsService } from '../utils/http-utils.service';
import { RoleRightsModel } from '../models/roleRights.model';
import { AccesspermissionsModel } from '../models/accesspermissions.model';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable()
export class CommonService {
	constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService,public loaders: LoadingBarService,
		public toastr: ToastrManager,) { }

	// READ
	CheckBeforeDeletePKID(SelectedRowID: number, TableName: string): Observable<any[]> {
		debugger;
		return this.http.get<any[]>("api/Common/GetDataToDeleteMastersData?SelectedRowID=" + SelectedRowID + "&TableName=" + TableName);
	}
	getAccessPermission(urL: string): Observable<AccesspermissionsModel> {
		debugger;
		return this.http.get<AccesspermissionsModel>("api/RoleRights/GetRoleRightsByRoute?uRl="+urL);
	}



}


