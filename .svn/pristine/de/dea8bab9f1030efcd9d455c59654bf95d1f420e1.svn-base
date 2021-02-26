import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { HttpUtilsService } from '../utils/http-utils.service';


@Injectable()
export class DashboardService {
	constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService) { }

	// READ
	GetDashboardToDoList(): Observable<any[]> {
		debugger;
		return this.http.get<any[]>("api/Dashboard/GetDashboardToDoList");
	}

// READ
	GetOverdueWorkItems(): Observable<any[]> {
		debugger;
		return this.http.get<any[]>("api/Dashboard/GetOverdueWorkItems");
	}


}


