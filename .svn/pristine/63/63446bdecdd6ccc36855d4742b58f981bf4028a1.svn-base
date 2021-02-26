import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpUtilsService } from '../utils/http-utils.service';

const API_URL = 'api/TrackMaterialData/';

@Injectable()
export class TrackMaterialService {

	constructor(private http: HttpClient, private httpUtils: HttpUtilsService) { }


	GetTrackMaterialData(projectID: number, workflowID: number) {
		return this.http.get(API_URL + "GetAllProcurementColMastersByProjectIDWorkflowID?ProjectID=" + projectID + "&WorkflowID=" + workflowID);
	}

	AddEditTrackMaterialData(DocumentFormColumnsSetting: any) {
		return this.http.post<any>(API_URL + "AddEditDocumentFormColumnsSetting", DocumentFormColumnsSetting);
	}

	DeleteDocumentFormColumnsSetting(id: string): any {
		return this.http.delete<any>(API_URL + "DeleteDocumentFormColumnsSettingByID?id=" + id);
	}





	//==================================================//

	GetDocumentLineItemColumns(projectID: number, workflowID: number, taskTypeCategoryID: number ) {
		return this.http.get(API_URL + "GetDocumentLineItemColumnsByProjectIDWorkflowID?ProjectID=" + projectID + "&WorkflowID=" + workflowID + "&TaskTypeCategoryID=" + taskTypeCategoryID);
	}

	AddEditLineItemColumns(DocumentLineItemColumnsSetting: any) {
		debugger;
		return this.http.post<any>(API_URL + "AddDocumentLineItemColumns", DocumentLineItemColumnsSetting);
	}


	UpdateTaskProgressDependOn(IsTaskProgressDependOn: string, DocumentLineItemColumnsID: number): Observable<any>  {
		debugger;
		return this.http.put<any[]>("api/TrackMaterialData/UpdateTaskProgressDependOn?IsTaskProgressDependOn=" + IsTaskProgressDependOn + "&DocumentLineItemColumnsID=" + DocumentLineItemColumnsID, this.httpUtils.getHTTPHeader());
	}

	//UpdateTaskProgressOn(TaskProgressOn: string, ProjectWorkflowID: number, TaskTypeID: number): Observable<any> {
	//	debugger;
	//	return this.http.put<any[]>("api/ProjectWorkFlow/UpdateTaskProgressOn?TaskProgressOn=" + TaskProgressOn + "&ProjectWorkflowID=" + ProjectWorkflowID + "&TaskTypeID=" + TaskTypeID, this.httpUtils.getHTTPHeader());
	//}

	DeleteDocumentLineItemColumnsByID(id: string): any {
		return this.http.delete<any>(API_URL + "DeleteDocumentLineItemColumnsByID?id=" + id);
	}

	

}
