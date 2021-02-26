import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Router } from '@angular/router';
import { NotificationsService } from '../../../../../core/services/notifications.service';


@Component({
	selector: 'm-recent-notifications',
	templateUrl: './recent-notifications.component.html',
	styles: ['.readMsg{color:black;font-weight:500}'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentNotificationsComponent implements OnInit {
	NotificationsData: any[] = [];
    loaderShow: boolean = false;


	constructor(private _notifyService: NotificationsService,
		public loaders: LoadingBarService,
		private router: Router) { }

	ngOnInit() {
		this.loaderShow = true;
		this.loaders.start();
	//	this._notifyService.GetRecentNotification().subscribe(res => {
		//	debugger;
		//	this.NotificationsData = res["data"];
		//	this.loaders.complete();
		//	this.loaderShow = false;
	//	});
		this.loaders.complete();
			this.loaderShow = false;
	}
	readNotification(NotificationID) {
		debugger;
		/*this._notifyService.UpdateNotificationStatus(NotificationID).subscribe(res => {

		});*/

	}

	markAsRead(id: number,routLink) {
		//this._notifyService.markAsRead(id).subscribe();

    }
	OnInvalidImage(id: number) {

        let ref = document.getElementById(id.toString());
        ref["src"] = './assets/images/userProfile/profile-user.jpg'
    }
}

