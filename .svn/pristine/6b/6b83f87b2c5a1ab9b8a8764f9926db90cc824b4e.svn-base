import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, BehaviorSubject, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpUtilsService } from '../utils/http-utils.service';
import { ProjectModel } from '../models/project.model';
import { QueryParamsModel } from '../models/query-models/query-params.model';
import { QueryResultsModel } from '../models/query-models/query-results.model';
import { projectDashboard } from '../models/projectDashboard';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { ProjectWbsModel } from '../models/projectWbs.model';

const API_PROJECTS_URL = 'api/project/';

@Injectable()
export class ProjectsService {
	lastFilter$: BehaviorSubject<QueryParamsModel> = new BehaviorSubject(new QueryParamsModel({}, 'asc', '', 0, 10));

	constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService) { }

	// CREATE =>  POST: add a new project to the server
	createProject(project): Observable<Object> {
		
		return this.http.put<Object>(API_PROJECTS_URL + "AddUpdateProject", project, this.httpUtils.getHTTPHeader());
	}

	// READ ongoing projects
	getAllProjects(): Observable<any> {
		//
		return this.http.get<any>(API_PROJECTS_URL + "GetOngoingProjects"); 
	}
	GetAllMasterProjects(): Observable<any> {
		return this.http.get<any>("api/Project/GetAllProjectForReport");
	}

	// READ ongoing projects
	GetProjectByTaskOwner(): Observable<any> {
		//
		return this.http.get<any>(API_PROJECTS_URL + "GetProjectByTaskOwner");
	}

	getAllProjectTemplate(): Observable<any> {
		//
		return this.http.get<any>("api/ProjectTemplate/GetProjectTemplates");
	}


	public assignValues(target: any, source: any): void {
		Object.assign(target, source);
	}


	// Get Nominate Engineer Count
	GetLogggedInUserHOD(projectId: number): Observable<any> {
		//
		return this.http.get<any>("api/User/ISLogggedInUserHOD?ProjectID=" + projectId, this.httpUtils.getHTTPHeader());
	}

	createNominateEngineer(project): Observable<Object> {

		return this.http.post<Object>(API_PROJECTS_URL + "AddUpdateNominatedEngg", project, this.httpUtils.getHTTPHeader());
	}

	// Get Nominate Engineer all Data 
	GetNominateEngineer(projectId: number, DepartmentID: number): Observable<any> {
		//
		return this.http.get<any>("api/Project/GetNominateEngineer?ProjectID=" + projectId + "&DepartmentID=" + DepartmentID, this.httpUtils.getHTTPHeader());
	}



	// READ Archived Projects
	getAllArchivedProjects(): Observable<any> {
		//
		return this.http.get<any>(API_PROJECTS_URL + "GetArchivedProjects");
	}

	// READ Closed Projects
	getAllClosedProjects(): Observable<any> {
		//
		return this.http.get<any>(API_PROJECTS_URL + "GetClosedProjects");
	}
	// READ Cancelled Projects
	getAllCancelledProjects(): Observable<any> {
		//
		return this.http.get<any>(API_PROJECTS_URL + "GetCancelledProjects");
	}

	// READ Estimation Projects
	getAllEstimationProjects(): Observable<any> {
		//
		return this.http.get<any>(API_PROJECTS_URL + "GetEstimationProjects");
	}

	GetProjectPriority(): Observable<any> {
		return this.http.get<any>(API_PROJECTS_URL + "GetProjectPriority");
	}

	GetProjectStatus(): Observable<any> {
		return this.http.get<any>(API_PROJECTS_URL + "GetProjectStatus");
	}
	GetNormSetDDL(): Observable<any> {
		return this.http.get<any>(API_PROJECTS_URL + "GetNormSetDDL");
	}

	GetProjectType(): Observable<any> {
		//
		return this.http.get<any>("api/ProjectType/GetProjectType");
	}

	getProjectById(projectId: number): Observable<any> {
		return this.http.get<any>(API_PROJECTS_URL + "GetProjectByID?ProjectId=" + projectId, this.httpUtils.getHTTPHeader());
	}

	GetProjectByIDToViewProject(projectId: number): Observable<any> {
		return this.http.get<any>(API_PROJECTS_URL + "GetProjectByIDToViewProject?ProjectId=" + projectId, this.httpUtils.getHTTPHeader());
	}



	IsProjectTasklistCreated(projectId: number): Observable<any> {
		//
		return this.http.get<any>("api/Project/IsProjectTasklistCreated?ProjectID=" + projectId, this.httpUtils.getHTTPHeader());
	}


	IsProjectTeamMeamber(projectId: number): Observable<any> {
		
		return this.http.get<any>("api/Project/IsProjectTeamMeamber?ProjectID=" + projectId, this.httpUtils.getHTTPHeader());
	}

	isProjectPLOrAdmin(projectId: number): Observable<any> {
		return this.http.get<any>("api/Project/isProjectPLOrAdmin?ProjectID=" + projectId, this.httpUtils.getHTTPHeader());
	}

	IsProjectTeamMeambeOrIsRFPE(projectId: number): Observable<any> {
		
		return this.http.get<any>("api/Project/IsProjectTeamMeambeOrIsRFPE?ProjectID=" + projectId, this.httpUtils.getHTTPHeader());
	}

	getProjectAdminsByProjectId(projectId: number): Observable<any> {
		return this.http.get<any>(API_PROJECTS_URL + "GetProjectAdmins?ProjectId=" + projectId, this.httpUtils.getHTTPHeader());
	}

	getProjectMembersByProjectId(projectId: number): Observable<any> {
		return this.http.get<any>(API_PROJECTS_URL + "GetProjectTeamMembers?ProjectId=" + projectId, this.httpUtils.getHTTPHeader());
	}
	getPreTaskOfProjectMilestone(taskId: number): Observable<any> {
		return this.http.get<any>(API_PROJECTS_URL + "GetPreTaskOfProjectMilestone?taskid=" + taskId, this.httpUtils.getHTTPHeader());
	}
	getProjectMembersandAdminsByProjectId(projectId: number): Observable<any> {
		return this.http.get<any>(API_PROJECTS_URL + "GetProjectTeamMembersAdmins?ProjectId=" + projectId, this.httpUtils.getHTTPHeader());
	}

	GetProjectMembersAdminsNormsToViewProject(projectId: number): Observable<any> {
		return this.http.get<any>(API_PROJECTS_URL + "GetProjectMembersAdminsNormsToViewProject?ProjectId=" + projectId, this.httpUtils.getHTTPHeader());
	}

	GetAllProjectCode(): Observable<any> {
		return this.http.get<any>(API_PROJECTS_URL + "GetAllProjectCode");
	}
	GetAllProjectCodeReport(): Observable<any> {
		return this.http.get<any>(API_PROJECTS_URL + "GetAllProjectCodeReport");
	}
	

	GetAllProjectDepartment(projectID: number): Observable<any> {
		return this.http.get<any>(API_PROJECTS_URL + "GetProjectDepartment?ProjectId=" + projectID, this.httpUtils.getHTTPHeader());
	}
	GetProjWbsGridData(projectID: number): Observable<any> {
		return this.http.get<any>(API_PROJECTS_URL + "GetProjectDepartment?ProjectId=" + projectID, this.httpUtils.getHTTPHeader());
	}
	PostProjWbsGridData(Data: ProjectWbsModel): Observable<ProjectWbsModel[]> {
		return this.http.post<ProjectWbsModel[]>(API_PROJECTS_URL + "getProjWbsGridData", Data, this.httpUtils.getHTTPHeader());
	}
	//public GetProjectBufferFields(ProjectId: number): Observable<any> {
	//	
	//	let params = new HttpParams().set('ProjectId', ProjectId.toString());
	//	return this.http.get<any>(API_PROJECTS_URL+"GetProjectBufferFields/", { params: params });
	//}

	findProjects(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		const params = this.httpUtils.getFindHTTPParams(queryParams);

		// Comment this when you start work with real server
		// This code imitates server calls
		// START
		return this.getAllProjects().pipe(
			mergeMap(res => of(new QueryResultsModel(res)))
		);
		// END

		// Uncomment this when you start work with real server
		// Note: Add headers if needed
		// START
		// const url = this.API_PROJECTS_URL + '/find';
		// return this.http.get<QueryResultsModel>(url, params);
		// END
	}

	// UPDATE => PUT: update the project on the server
	updateProject(project: ProjectModel): Observable<any> {
		//
		return this.http.put(API_PROJECTS_URL + "AddUpdateProject", project, this.httpUtils.getHTTPHeader());
	}


	public UploadProjectDoc(formData: any): Observable<Object> {
		//
		return this.http.post(API_PROJECTS_URL + "UploadProjectDocs", formData);
	}
	public GetProjectDocumets(projectID: any): Observable<Object> {
		//
		return this.http.get(API_PROJECTS_URL + "GetProjectDocumets?id=" + projectID, this.httpUtils.getHTTPHeader());

	}
	public DeleteProjectDocumet(ProjectDocumentID: number, projectID: number): Observable<Object> {
		//
		return this.http.get(API_PROJECTS_URL + "DeleteProjectDocumet?ProjectDocumentID=" + ProjectDocumentID + "&ProjectID=" + projectID, this.httpUtils.getHTTPHeader());;

	}
	public DownloadProjectDocuments(fileids: any): Observable<any> {
		return this.http.get(`${API_PROJECTS_URL}DownloadProjectDocument?fileid=${fileids}`, {
			responseType: "blob"
		})
	}


	// DELETE => delete the project from the server

	deleteProject(projectId: any): Observable<any> {
		//
		return this.http.get<any>(API_PROJECTS_URL + "DeleteProject?ProjectId=" + projectId, this.httpUtils.getHTTPHeader());
	}

	// Method imitates server calls which deletes items from DB (should rewrite this to real server call)
	// START
	deleteProjects(ids: number[] = []) {
		// Comment this when you start work with real server
		// This code imitates server calls
		// START
		const tasks$ = [];
		const length = ids.length;
		for (let i = 0; i < length; i++) {
			tasks$.push(this.deleteProject(ids[i]));
		}
		//return forkJoin(tasks$);
		// END

		// Uncomment this when you start work with real server
		// Note: Add headers if needed
		// START
		//const url = this.API_PROJECTS_URL + '/delete';
		// return this.http.get<QueryResultsModel>(url, { params: ids });
		// END
	}

	getMilestoneData(projectId: number, taskId: number, taskTypeId: number): Observable<any> {

		return this.http.put(API_PROJECTS_URL, projectId, this.httpUtils.getHTTPHeader());
	}
	//get data for Additional control
	getAdditionalFormContolData(ProjectId): Observable<any>  {
		//
		let params = new HttpParams().set('ProjectId', ProjectId.toString());
		return this.http.get<any>(API_PROJECTS_URL +"GetAdditionalControl/", { params: params });
		//return this.http.get(API_PROJECTS_URL+"GetAdditionalControl");
	}
	PostNominatedUserDataInTaskList(data: any): Observable<object> {
		//
		return this.http.post<object>(API_PROJECTS_URL + "PostNominatedUserDataInTaskList", data, this.httpUtils.getHTTPHeader());
	}


	getAllProjectGroupList(): Observable<any[]> {
		
		return this.http.get<any[]>("api/ProjectGroup/GetProjectGroup");
	}

	///////   client masters /////////////
	getAllClients(): Observable<any[]> {
		//
		return this.http.get<any[]>("api/Client/GetClients");
	}
	getAllClientAsset(ClientID:number): Observable<any[]> {
		//
		return this.http.get<any[]>("api/ClientAsset/GetClientAssetsByClientID?ClientID=" + ClientID, this.httpUtils.getHTTPHeader());
	}
	getAllClientContract(ClientID: number): Observable<any[]> {
		//
		return this.http.get<any[]>("api/ClientContract/GetClientContractByClientID?ClientID=" + ClientID, this.httpUtils.getHTTPHeader());
	}
	getAllClientFocalPoint(ClientID: number): Observable<any[]> {
		//
		return this.http.get<any[]>("api/ClientFocalPoint/GetClientFocalPointsByClientID?ClientID=" + ClientID, this.httpUtils.getHTTPHeader());
	}
	getMDRData(percentage: number): Observable<any[]> {
		//
		return this.http.get<any[]>(API_PROJECTS_URL+"getMdrReport?Progress=" + percentage, this.httpUtils.getHTTPHeader());
    }
    GetContractwiseProjectReportData(): Observable<any[]> {
        return this.http.get<any[]>(API_PROJECTS_URL + "GetContractwiseProjectReportData", this.httpUtils.getHTTPHeader());
    }
}
