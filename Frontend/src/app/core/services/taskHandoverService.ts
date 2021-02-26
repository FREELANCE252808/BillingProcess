import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { HttpUtilsService } from '../utils/http-utils.service';
import { Observable } from 'rxjs';
import { TaskHandOverModel, TaskHandoverPostData } from '../models/TaskhandoverModel';

const Api_Url ="api/TaskHandover/"
@Injectable()
export class TaskHandoverservice {

	constructor(private http: HttpClient,
		private util: UtilsService,
		private httpUtils: HttpUtilsService) { }


	GetCurrentTaskList(data: TaskHandOverModel): Observable<any> {
		return this.http.post<any>(Api_Url +"GetCurrentTaskList", data, this.httpUtils.getHTTPHeader());
	}
	CheckValidHandOverPeriod(data: TaskHandOverModel): Observable<any> {
		return this.http.post<any>(Api_Url+"CheckValidHandOverPeriod", data, this.httpUtils.getHTTPHeader());
	}
	GetUsersList(): Observable<any> {
		return this.http.get<any>(Api_Url + "GetUsersList");
	}
	AddUpdateHandover(data: any): Observable<any> {
		return this.http.post<any>(Api_Url + "SaveHandOverData",data, this.httpUtils.getHTTPHeader());
	}
	GetUsersIdByName(name): Observable<any> {
		return this.http.get<any>(Api_Url + "GetUsersList?UserName=" + name);
	}
	GetUserHandovertaskList(handoverId): Observable<any> {
		return this.http.get<any>(Api_Url + "GetUserHandovertaskList?handoverId=" + handoverId);
	}
	GethandoverdTaskByID(handoverId): Observable<any> {
		return this.http.get<any>(Api_Url + "GethandoverdTaskByID?handoverId=" + handoverId);
	}

	GetAllHandoverRequestList(): Observable<any> {
		return this.http.get<any>(Api_Url + "GetAllHandoverRequestList");
	}

	GetHandoverRequestListByTaskHandoverID(TaskHandoverID:number): Observable<any> {
		return this.http.get<any>(Api_Url + "HandoverRequestListByTaskHandoverID?TaskHandoverID=" + TaskHandoverID);
	}
	AcceptHandoverRequest(TaskHandoverDetailID: number): Observable<any> {
		return this.http.get<any>(Api_Url + "AcceptHandoverRequest?TaskHandoverDetailID=" + TaskHandoverDetailID);
	}
	RemoveHandoverdTask(Id): Observable<any> {
		return this.http.delete<any>(Api_Url + "DeletehandoverdTaskByID?TaskHandoverDetailID=" + Id);
	}
}
