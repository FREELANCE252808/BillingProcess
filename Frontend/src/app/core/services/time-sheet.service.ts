import { Injectable } from '@angular/core';
import { TimeSheetModel, TimesheetPostModel } from '../models/timesheet.model';
import { HttpClient } from '@angular/common/http';
import { HttpUtilsService } from '../utils/http-utils.service';
import { Observable } from 'rxjs';

const API_TimeSheet_URL = 'api/Timesheet/';
@Injectable()
export class TimeSheetService {

	constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService) { } 

	saveTimesheet(dataItem: TimesheetPostModel[]): Observable<any[]> {

		debugger;
		return this.http.post<TimesheetPostModel[]>(API_TimeSheet_URL + "PostTimesheetData", dataItem, this.httpUtils.getHTTPHeader());
	}
	gettaskList(Startdate, Enddate,taskID ,TimesheetId): Observable<any> {
		debugger;
		return this.http.get<any>(API_TimeSheet_URL + "GetTaskByUserid?start=" + Startdate + "&end=" + Enddate +"&TaskID="+taskID+ "&TimesheetId=" + TimesheetId, this.httpUtils.getHTTPHeader());
	}
	getTimesheetByUserID(StartDate: any, EndDate:any,timeSheetWeeklyID:any): Observable<any[]> {
		debugger;
		return this.http.get<any[]>(API_TimeSheet_URL + "GetTimesheetByUserID?start=" + StartDate + "&end=" + EndDate + "&timeSheetWeeklyID="+timeSheetWeeklyID,this.httpUtils.getHTTPHeader());
	}
	deleteTimesheet(TaskId: number, TimeSheetWeeklyID: number): Observable<any> {
		debugger;
		return this.http.delete<any>(API_TimeSheet_URL + "deleteTimesheet?TaskId=" + TaskId + "&TimeSheetWeeklyID=" + TimeSheetWeeklyID, this.httpUtils.getHTTPHeader());
	}
	

	getDailyWorkingHour(projectid: number): Observable<any[]> {
			debugger;
		return this.http.get<any[]>(API_TimeSheet_URL + "GetDailyWorkingHour?ProjectID=" + projectid, this.httpUtils.getHTTPHeader());
		
	}
	FinalSubmitTimesheet(data: TimeSheetModel): Observable<any> {
		debugger;
		return this.http.post<any>(API_TimeSheet_URL + "UpdateFinalStatus", data, this.httpUtils.getHTTPHeader());
	}
	getWeekWiseTimesheetList(month:number,year:number): Observable<any[]> {
		debugger;
		return this.http.get<any[]>(API_TimeSheet_URL + "getWeekWiseTimesheetList?Month=" + month + "&Year=" + year, this.httpUtils.getHTTPHeader());
	}

	GetWeeklyTimesheetApproval(): Observable<any> {
		debugger;
		return this.http.get<any>("api/Timesheet/GetWeeklyTimesheetApproval");
	}
	
	ApproveRejectWeeklyTimesheet(TimeSheetWeeklyID: number, UserID: number, Flag: number,remark: string): Observable<any> {
		debugger;
		return this.http.get<any>("api/Timesheet/ApproveRejectTimeSheet?TimeSheetWeeklyID=" + TimeSheetWeeklyID + "&timesheetuserid=" + UserID + "&Flag=" + Flag + "&Remark=" + remark);
	}

	GetStartAndEndDateByTimesheetWeeklyID(timesheetWeeklyID): Observable<any[]> {
		return this.http.get<any[]>(API_TimeSheet_URL + "GetStartAndEndDateByTimesheetWeeklyID?timesheetWeeklyID=" + timesheetWeeklyID , this.httpUtils.getHTTPHeader());
	}
	deleteTaskFromTimesheet(TimeSheetWeeklyDetailsID: number): Observable<any> {
		return this.http.delete<any>(API_TimeSheet_URL + "deleteTimesheetTask?TimeSheetWeeklyDetailID=" + TimeSheetWeeklyDetailsID , this.httpUtils.getHTTPHeader());
	}
	GetTimesheetListToUnlock(): Observable<any[]> {

		return this.http.get<any[]>(API_TimeSheet_URL + "GetUnlockTimesheet" , this.httpUtils.getHTTPHeader());
	}
	UnlockTimesheet(data:any): Observable<any> {
		return this.http.post<any>(API_TimeSheet_URL + "UnlockTimesheet", data, this.httpUtils.getHTTPHeader());
	}
	GetTimesheetWeeklyID(data: any): Observable<any> {
		return this.http.post<any>(API_TimeSheet_URL + "GetTimesheetWeeklyID", data, this.httpUtils.getHTTPHeader());
	}
	getMissingOrIncompleteTsheet(Satrtdate: any): Observable<any> {
		debugger;
		return this.http.post<any>(API_TimeSheet_URL + "getMissingOrIncompleteTsheet?startDate=" + Satrtdate, this.httpUtils.getHTTPHeader());
	}
	getReportMissingIncompleteTimesheetDetail(Satrtdate: any): Observable<any> {
		debugger;
		return this.http.post<any>(API_TimeSheet_URL + "getReportMissingIncompleteTimesheetDetail?startDate=" + Satrtdate, this.httpUtils.getHTTPHeader());
	}
}

