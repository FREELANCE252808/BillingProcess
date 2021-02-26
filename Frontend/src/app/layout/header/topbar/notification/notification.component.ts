import {
	Component,
	OnInit,
	HostBinding,
	HostListener,
	Input,
	ChangeDetectionStrategy,

    OnDestroy
} from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Router } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { Subscription, Observable, of } from 'rxjs';
import { NotificationsModel } from '../../../../core/models/notifications.model';
import { NotificationsService } from '../../../../core/services/notifications.service';

@Component({
	selector: 'm-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent implements OnInit {

	loaderShow: boolean;
	activeNode: any;
	interval: any;
	@HostBinding('class')
	// tslint:disable-next-line:max-line-length
	classes = 'm-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center 	m-dropdown--mobile-full-width';

	@HostBinding('attr.m-dropdown-toggle') attrDropdownToggle = 'click';
	@HostBinding('attr.m-dropdown-persistent') attrDropdownPersisten = 'true';

	@Input() animateShake: any;
	@Input() animateBlink: any;
	private subscription: Subscription = new Subscription();
	notificationmodel: NotificationsModel[] = [];
	NewMessageCount: string;
	//lstNotification: any[] = [];
	lstNotification: Observable<any[]> = new Observable<any>();
	//NotificationCount: number = 0;
	NotificationCount: Observable<any> = new Observable<any>();
	lstAlert: any[] = [];
	NotiCount: any;
	constructor(public notificationsService: NotificationsService, public lodder: LoadingBarService, private router: Router,
	) {
		// animate icon shake and dot blink
		setInterval(() => {
			this.animateShake = 'm-animate-shake';
			this.animateBlink = 'm-animate-blink';
		}, 60000);
		setInterval(() => (this.animateShake = this.animateBlink = ''), 60000);
	}
	onAllNoti() {
		this.router.navigate(['/allnoti']);
	}
	showNotifications() {
		debugger;
		//debugger;
		this.loaderShow = true;
		this.lodder.start();
		/*this.notificationsService.getAllNotifications().subscribe(notificationData => {
			debugger;
			this.notificationmodel = notificationData["data"];
			this.NewMessageCount = notificationData["data"].filter(a => a.Active == "Y").length + ' ' + 'New Notification';
			this.lstNotification = of(notificationData["data"].filter(a => a.MessageType == "N"));
			this.lstAlert = notificationData["data"].filter(a => a.MessageType == "A");
			this.NotificationCount = of(notificationData["data"].length);
			this.NotiCount = notificationData["data"].length;
			this.lodder.complete();
			this.loaderShow = false;
		});*/
		this.lodder.complete();
		this.loaderShow = false;
	}
	//subscribeToData() {
	//	debugger;
	//	this.lodder.start();
	//	this.subscription.add(
	//		this.notificationsService.getAllNotifications()
	//			.subscribe(data => {
	//				this.NotificationCount = this.NotificationCount = data["data"].length;
	//				this.lodder.stop()
	//			}));
	//}


	ngOnInit() {
		//this.subscribeToData();
		//this.interval = setInterval(() => {
		//	this.subscribeToData();
		//}, 5000);
		//debugger;
		//this.lodder.start();
		//this.notificationsService.getAllNotifications().subscribe(notificationData => {
		//	debugger;
		//	this.notificationmodel = notificationData["data"];
		//	this.NewMessageCount = notificationData["data"].filter(a => a.Active == "Y").length + ' ' + 'New Notification';

		//	this.lstNotification = notificationData["data"].filter(a => a.MessageType == "N");

		//	this.lstAlert = notificationData["data"].filter(a => a.MessageType == "A");
		//	this.lodder.complete();
		//});
		this.showNotifications();
	}



	Route(notification) {
		debugger;
		//{ { notification.RedirectURL } } { { notification.QueryString } }
		//debugger;
		//if (notification.RedirectURL != undefined && notification.RedirectURL != null)
			//try {
			//	this.router.navigateByUrl(notification.RedirectURL);
				//this.attrDropdownPersisten = 'true';
				//this.attrDropdownToggle = 'click';
				this.notificationsService.markAsRead(notification.id).subscribe(d => {
					debugger;
					this.showNotifications();
				});
			///}
			//catch (e) {
			//}
	}

}
