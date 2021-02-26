
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilsService } from '../utils/http-utils.service';
import { Observable } from 'rxjs';
import { TaskListPostData } from '../models/taskList.model';
import { NormsTaskListPostData } from '../models/normsTaskList.model';


const API_URL = 'api/TaskList/';

@Injectable()
export class TaskListService {

	constructor(private http: HttpClient, private httpUtils: HttpUtilsService) { }

	getTaskListByProjectId(projectId: number, TaskTypeCategoryID: number, PageIndex: number, PageSize: number, isComponetLoad:string,): Observable<any> {

		return this.http.get<any>(API_URL + "GetTaskListByProjectId?ProjectId=" + projectId + "&TaskTypeCategoryID=" + TaskTypeCategoryID + "&isComponetLoad=" + isComponetLoad+"&TaskMaxID=0&PageIndex=" + PageIndex + "&PageSize=" + PageSize, this.httpUtils.getHTTPHeader());
	}
	UpdateSubTaskHour(TaskID: number, OldValue: number, NewValue: number ): Observable<any> {

		return this.http.get<any>(API_URL + "UpdateSubTaskHourByTaskID?TaskID=" + TaskID + "&OldValue=" + OldValue + "&NewValue=" + NewValue, this.httpUtils.getHTTPHeader());
	}

	AdjustedAccessAllocation(TaskID: number, AdjustedValue: number): Observable<any> {

		return this.http.get<any>(API_URL + "AdjustedAccessAllocation?TaskID=" + TaskID + "&AdjustedValue=" + AdjustedValue , this.httpUtils.getHTTPHeader());
	}

	













	getCustomTaskListByProjectId(projectId: number, TaskTypeCategoryID: number, PageIndex: number, PageSize: number, isComponetLoad: string, ): Observable<any> {

		return this.http.get<any>(API_URL + "GetCustomTaskListByProjectId?ProjectId=" + projectId + "&TaskTypeCategoryID=" + TaskTypeCategoryID + "&isComponetLoad=" + isComponetLoad + "&TaskMaxID=0&PageIndex=" + PageIndex + "&PageSize=" + PageSize, this.httpUtils.getHTTPHeader());
	}

	GetTaskListToBindHot(projectId: number, TaskTypeCategoryID: number, PageIndex: number, PageSize: number, isComponetLoad: string, ): Observable<any> {

		return this.http.get<any>(API_URL + "GetTaskListToBindHot?ProjectId=" + projectId + "&TaskTypeCategoryID=" + TaskTypeCategoryID + "&isComponetLoad=" + isComponetLoad + "&TaskMaxID=0&PageIndex=" + PageIndex + "&PageSize=" + PageSize, this.httpUtils.getHTTPHeader());
	}

	GetCustomTaskListByProjectIdHOT(projectId: number, TaskTypeCategoryID: number, PageIndex: number, PageSize: number, isComponetLoad: string, ): Observable<any> {

		return this.http.get<any>(API_URL + "GetCustomTaskListByProjectIdHOT?ProjectId=" + projectId + "&TaskTypeCategoryID=" + TaskTypeCategoryID + "&isComponetLoad=" + isComponetLoad + "&TaskMaxID=0&PageIndex=" + PageIndex + "&PageSize=" + PageSize, this.httpUtils.getHTTPHeader());
	}
	

	public GetTaskColumnSettings(projectId: string, TaskTypeCatgeoryID: string): Observable<any> {
		return this.http.get<any>(API_URL + "GetTaskColumnSettingByProjectID?ProjectID=" + projectId + "&TaskTypeCatgeoryID=" + TaskTypeCatgeoryID, this.httpUtils.getHTTPHeader());
	}

	public GetTaskColumnSettingDDLColumnByTableName(TableName: string): Observable<any> {
		return this.http.get<any>(API_URL + "GetTaskColumnSettingDDLColumnByTableName?TableName=" + TableName, this.httpUtils.getHTTPHeader());
	}

	AddEditTask(taskListPostData: TaskListPostData[], pageIndex: number, pageSize: number): Observable<any> {
		debugger;
		taskListPostData[0].PageIndex = pageIndex;
		taskListPostData[0].PageSize = pageSize;
		return this.http.post(API_URL + "AddEditTask", taskListPostData, this.httpUtils.getHTTPHeader());
	}

	AddEditTaskCustom(taskListPostData: TaskListPostData[], pageIndex: number, pageSize: number): Observable<any> {
		debugger;
		taskListPostData[0].PageIndex = pageIndex;
		taskListPostData[0].PageSize = pageSize;
		return this.http.post(API_URL + "AddEditTaskCustom", taskListPostData, this.httpUtils.getHTTPHeader());
	}

	AddEditNormsTask(taskListPostData: NormsTaskListPostData[]): Observable<any> {
		return this.http.post(API_URL + "AddEditNormTask", taskListPostData, this.httpUtils.getHTTPHeader());
	}

	DeleteNormsTask(payload): Observable<any> {
		return this.http.post(API_URL + "DeleteNormByNormID", payload, this.httpUtils.getHTTPHeader());
	}

	public GetTaskTypeCategory(): Observable<any> {
		return this.http.get<any>("api/Tasktype/GetTaskTypeCategory", this.httpUtils.getHTTPHeader());
	}

	public AddUpdateColumninTaskList(taskListPostData): Observable<any> {
		return this.http.post<any>(API_URL + "AddUpdateColumninTaskList", taskListPostData, this.httpUtils.getHTTPHeader());
	}

	getNormTaskListByNormSetID(normSetID: number): Observable<any> {
		debugger;
		return this.http.get<any>(API_URL + "GetNormTaskListByNormSetID?NormSetID=" + normSetID, this.httpUtils.getHTTPHeader());
	}
	getNormTaskListByNormID(IsNormFilterByDept:string, TaskTypeCategoryID: number, projectid:number): Observable<any> {

		return this.http.get<any>(API_URL + "GetNormTaskListByNormID?IsNormFilterByDept=" + IsNormFilterByDept+"&TaskTypeCategoryID=" + TaskTypeCategoryID+"&projectid=" + projectid, this.httpUtils.getHTTPHeader());
	}
	getNormTaskSettingColsByNormSetID(normSetID: number): Observable<any> {

		return this.http.get<any>(API_URL + "GetNormTaskSettingColsByNormSetID?NormSetID=" + normSetID, this.httpUtils.getHTTPHeader());
	}

	//GetNormTaskColumnSettingByNormSetID(normSetID: number): Observable<any> {
	//	debugger;
	//	return this.http.get<any>("api/TaskList/GetNormTaskColumnSettingByNormSetID?NormSetID=" + normSetID, this.httpUtils.getHTTPHeader());
	//}

	public GetNormTaskColumnSettingByNormSetID(normSetID: string): Observable<any> {

		return this.http.get<any>("api/TaskList/GetNormTaskColumnSettingByNormSetID?NormSetID=" + normSetID, this.httpUtils.getHTTPHeader());
	}


	public AddUpdateColumninTaskNormList(taskListPostData): Observable<any> {

		return this.http.post<any>("api/TaskList/AddUpdateColumninNormsTaskList", taskListPostData, this.httpUtils.getHTTPHeader());
	}
	public GetActivitylog(taskID): Observable<any> {
		return this.http.get<any>("api/TaskList/GetTaskActivityLogByTaskID?TaskId=" + taskID, this.httpUtils.getHTTPHeader());

	}


	GropupTask(groupData: string, TaskTypeCategoryID: number,NormTypeID:number): Observable<any> {
		debugger;
		return this.http.get<any>("api/TaskList/groupSelectedTask?taskIDs=" + groupData + "&TaskTypeCategoryID=" + TaskTypeCategoryID + "&NormTypeID=" + NormTypeID, this.httpUtils.getHTTPHeader());
	}

	UnGropupTask(groupData: string, TaskTypeCategoryID: number): Observable<any> {
		debugger;
		return this.http.get<any>("api/TaskList/UngroupTask?taskID=" + groupData, this.httpUtils.getHTTPHeader());
	}


	ShowSummaryTask(projectId: number, TaskTypeCategoryID: number): Observable<any> {
		debugger;
		return this.http.get<any>("api/TaskList/ShowSummaryTask?ProjectID=" + projectId + "&TaskTypeCategoryID=" + TaskTypeCategoryID, this.httpUtils.getHTTPHeader());
	}


	DeleteSelectedTaskListByID(taskIds: string ): Observable<any> {
		debugger;
		return this.http.get<any>("api/TaskList/DeleteSelectedTaskByTaskID?taskIDs=" + taskIds , this.httpUtils.getHTTPHeader());
	}

	getCSvFileHeaderData(ProjectId, taskTypeCatID): Observable<any> {
		debugger;
		return this.http.get<any>("api/TaskList/GetCSVHeaderData?ProjectId=" + ProjectId + "&taskTypeCatID=" + taskTypeCatID);
		//return this.http.get(API_PROJECTS_URL+"GetAdditionalControl");
	}

	rowDragDrop(sourceDisplayOrder: number, targetDisplayOrder: number): Observable<any> {
		debugger;
		return this.http.get<any>("api/TaskList/RowDragDropOfTaskColumnSetting?sourceDisplayOrder=" + sourceDisplayOrder + "&targetDisplayOrder=" + targetDisplayOrder);
	}

	GetDuplicateRecordOfNorms(NormSetID: number): Observable<any> {
		debugger;
		return this.http.get<any>("api/TaskList/GetDuplicateRecordOfNorms?NormSetID=" + NormSetID);
	}
	GetDDLNorms(deptID: number, StageID: number, NormSetID:number): Observable<any[]> {
		return this.http.get<any[]>("api/NormTaskGroup/GetDDLNorms?deptID=" + deptID + "&StageID=" + StageID + "&NormSetID=" + NormSetID);
	}
	CreateNormsGroup(data: any): Observable<any[]> {
		return this.http.post<any[]>("api/NormTaskGroup/CreateNormsGroup", data, this.httpUtils.getHTTPHeader());
	}
	GetDDLDept(): Observable<any[]> {
		return this.http.get<any[]>("api/Department/GetDepartments");
	}
	GetDepartmentNameCode(): Observable<any[]> {
		return this.http.get<any[]>("api/Department/GetDepartmentsNameCode");
	}
	GetDDLStage(): Observable<any[]> {	
		return this.http.get<any[]>("api/ProjectStage/GetProjectStage");
	}
	GetProjectStageNameCode(): Observable<any[]> {	
		return this.http.get<any[]>("api/ProjectStage/GetProjectStageNameCode");
	}
	GetDDLNormType(): Observable<any[]> {
		return this.http.get<any[]>("api/TaskList/GetLstNormType");
	}
	DeleteNormsFromGroup(NormTaskID: any): Observable<any[]> {
		return this.http.delete<any[]>("api/NormTaskGroup/DeleteNormsFromGroup?NormTaskID=" + NormTaskID, this.httpUtils.getHTTPHeader());
	}

	CheckBeforeDeleteUnGroupTaskByTaskID(taskIDs: string): Observable<any> {
		debugger;
		return this.http.get<any>("api/TaskList/CheckBeforeDeleteUnGroupTaskByTaskID?taskIDs=" + taskIDs, this.httpUtils.getHTTPHeader());
	}
	getDiffOfParentAndChildHours(taskIDs: string): Observable<any> {
		debugger;
		return this.http.get<any>("api/TaskList/getDiffOfParentAndChildHours?taskIDs=" + taskIDs, this.httpUtils.getHTTPHeader());
	}
	deleteTaskOfONGProject(taskIDs: string): Observable<any> {
		debugger;
		return this.http.get<any>("api/TaskList/deleteTaskOfONGProject?taskIDs=" + taskIDs, this.httpUtils.getHTTPHeader());
	}

}
