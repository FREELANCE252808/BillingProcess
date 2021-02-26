import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpUtilsService } from '../utils/http-utils.service';
import { EmailsModel } from '../models/emails.model';
import { QueryParamsModel } from '../models/query-models/query-params.model';
import { QueryResultsModel } from '../models/query-models/query-results.model';

const API_EMAILBy_ID_URL = 'api/EmailSMSTemplate/GetEmailTemplatesByID?TemplateID=';

@Injectable()
export class EmailsService {
	constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService) { }

	// READ
	getAllEmail(): Observable<any> {
		return this.http.get<any>("api/EmailSMSTemplate/GetEmailSMSTemplate");
	}
	GetTemplatesByID(emailTemplateID: number): Observable<any> {
		debugger;
	//	return this.http.get<any>("api/EmailSMSTemplate/GetEmailTemplatesByID?TemplateID=" + emailTemplateID);
	return this.http.get<any>("api/EmailSMSTemplate/GetTemplatesByID?TemplateID="+ emailTemplateID);
	}

	// UPDATE => PUT: update the customer on the server
	updateEmail(email: EmailsModel): Observable<any> {
		return this.http.put("api/EmailSMSTemplate/UpdateEmailSMSTemplate", email, this.httpUtils.getHTTPHeader());
	}

	// CREATE =>  POST: add a new Department to the server
	createEmail(email: EmailsModel): Observable<any> {
		debugger;
		return this.http.post<EmailsModel>("api/EmailSMSTemplate/AddEditEmailSMSTemplate", email, this.httpUtils.getHTTPHeader());
	}

	// DELETE => delete the customer from the server
	deleteEmail(emailId: any): Observable<any> {
		return this.http.delete<EmailsModel[]>("api/EmailSMSTemplate/DeleteEmailSMSTemplate?EmailTemplateID=" + emailId);
	}



	// START
	deleteEmails(ids: string) {
		return this.http.delete<EmailsModel[]>("api/EmailSMSTemplate/DeleteSelectedEmailTemplate?PkID=" + ids)
	}

	findEmail(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		const params = this.httpUtils.getFindHTTPParams(queryParams);
		var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
		return this.http.get<EmailsModel[]>("api/EmailSMSTemplate/GetEmailSMSTemplate").pipe(
			mergeMap(res => of(new QueryResultsModel(res)))
		);
	}

	getRecipientList(fileIDs: string, msgId: string): Observable<any>{
		let params = new HttpParams();
		params = params.append('FileIDs', fileIDs);
		params = params.append('MsgId', msgId);
		return this.http.get("api/EmailSMSTemplate/GetRecipientList", { params: params});
	}

	getEmailData(projectID: string, projectName: string, projectCode: string, taskID: string, taskName: string, workflowID: string, workflowName: string, taskOwner: string, fileIDs: string): Observable<any> {
		let params = new HttpParams();
		params = params.append('ProjectID', projectID);
		params = params.append('ProjectName', projectName);
		params = params.append('ProjectCode', projectCode);
		params = params.append('TaskID', taskID);
		params = params.append('TaskName', taskName);
		params = params.append('WorkflowID', workflowID);
		params = params.append('WorkflowName', workflowName);
		params = params.append('TaskOwner', taskOwner);
		params = params.append('FileIDs', fileIDs);

		return this.http.get<any>("api/EmailSMSTemplate/GetEmailData", { params: params });
	}

}
