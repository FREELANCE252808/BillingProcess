import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpUtilsService } from '../utils/http-utils.service';
import { UsersModel } from '../models/users.model';
import { QueryParamsModel } from '../models/query-models/query-params.model';
import { QueryResultsModel } from '../models/query-models/query-results.model';
import { UserModule } from '../../adminmodule/users/user.module';

const API_GET_ALL_USERS_URL = 'api/User/GetUsers';
const API_GET_USER_By_ID_URL = 'api/User/GetUserByUserID?userID=';
@Injectable()
export class UsersService {
	constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService) { }

	getAllUsers(): Observable<any> {
		debugger;
		return this.http.get<any>(API_GET_ALL_USERS_URL);
	}
	//gat all users data
	GetUsersData(userID: number): Observable<UsersModel> {
		debugger;
		return this.http.get<any>(API_GET_USER_By_ID_URL + userID);
	}
	//get all role
	GetRoles(): Observable<any> {
		debugger;
		return this.http.get<any>("api/Role/GetRoles");
	}

	AddEditUser(user: UsersModel): Observable<any> {
		debugger;
		return this.http.post<any>("api/User/AddEditUser", user, this.httpUtils.getHTTPHeader());
	}

	deleteUser(UserID: any): Observable<any> {
		debugger;
		return this.http.delete<UsersModel[]>("api/User/DeleteUser?userID=" + UserID);
	}


	UploadUserImg(formData:any): Observable<any> {
		debugger;
		return this.http.post<any>("api/User/UploadImagess", formData);
	}



	//Is Email exist
	public IsEmailIDRegister(EmailId: string, UserID:number): Observable<boolean> {
		debugger;
		return this.http.get<boolean>("api/User/CheckDuplicateEmailID?emailId=" + EmailId + "&userID=" + UserID);
	}


	public IsdublicateEmployeecode(Employeecode: string, UserID: number): Observable<any> {
		debugger;
		return this.http.get<any>("api/User/IsdublicateEmployeecode?Employeecode=" + Employeecode + "&UserID=" + UserID);
	}


/*
	getUsersById(userId: number): Observable<UsersModel> {
		return this.http.get<UsersModel>(API_USERS_URL + `/${userId}`);
	}
*/

	findUsers(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		const params = this.httpUtils.getFindHTTPParams(queryParams);


		return this.http.get<UsersModel[]>(API_GET_ALL_USERS_URL).pipe(
			mergeMap(res => of(new QueryResultsModel(res)))
		);

	}


	//updateStatusForUser(users: UsersModel[], Status: number): Observable<any> {
	//	const tasks$ = [];
	//	for (let i = 0; i < users.length; i++) {
	//		const _users = users[i];
	//		_users.Status = Status;
	//		tasks$.push(this.updateUser(_users));
	//	}
	//	return forkJoin(tasks$);
	//}




	deleteUsers(ids: number[] = []) {

		const tasks$ = [];
		const length = ids.length;
		for (let i = 0; i < length; i++) {
			tasks$.push(this.deleteUser(ids[i]));
		}
		return forkJoin(tasks$);

	}
}


