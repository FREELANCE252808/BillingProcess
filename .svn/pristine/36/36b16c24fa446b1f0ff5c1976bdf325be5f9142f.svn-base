import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpUtilsService } from '../utils/http-utils.service';
import { QueryParamsModel } from '../models/query-models/query-params.model';
import { QueryResultsModel } from '../models/query-models/query-results.model';

//const API_USERS_URL = 'api/departments////';

@Injectable()
export class TaskProgressService {
	constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService) { }

	// READ
	getAllTaskProgress(TaskId:number): Observable<any[]> {
		debugger;
		return this.http.get<any[]>("api/TaskList/GetTaskWorkflowDetailByTaskID?TaskId=" + TaskId, this.httpUtils.getHTTPHeader());
	}


	// UPDATE => PUT: update the ClientAsset on the server
	updateTaskProgress(data: any[]): Observable<any> {
		debugger;
		return this.http.post("api/Timesheet/AddTaskUpdateTaskProgress", data, this.httpUtils.getHTTPHeader());
	}

	deleteTaskProgress(ClientAssetID: any): Observable<any> {
		debugger;
		return this.http.delete<any[]>("" + ClientAssetID);
	}

}


