import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpUtilsService } from '../utils/http-utils.service';
import { NotificationsModel } from '../models/notifications.model';
import { QueryParamsModel } from '../models/query-models/query-params.model';
import { QueryResultsModel } from '../models/query-models/query-results.model';


@Injectable()
export class NotificationsService {
	constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService) { }

	// READ
	getAllNotifications(): Observable<any[]> {

		return  this.http.get<any[]>("api/Notifications/GetNotifications");
	}

	//See all notification
	getSeeAllNotifications(): Observable<any[]> {
		return this.http.get<any[]>("api/Notifications/SeeAllNotifications");
	}

	// READ
	markAsRead(NotificationID): Observable<any[]> {

		return this.http.get<any[]>("api/Notifications/MakenotificationInactive?id=" + NotificationID);
	}

	UpdateNotificationStatus(NotificationID: number): Observable<any[]> {

		return this.http.get<any>("api/Notifications/UpdateNotificationStatus?NotificationID=" + NotificationID);
	}
	GetRecentNotification(): Observable<any[]> {

		return this.http.get<any[]>("api/Notifications/GetRecentNotification");
	}



}


