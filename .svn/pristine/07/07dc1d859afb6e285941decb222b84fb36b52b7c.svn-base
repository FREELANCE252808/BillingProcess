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
	selector: 'm-SeeAllNotification',
	templateUrl: './SeeAllNotification.component.html',
	styleUrls: ['./SeeAllNotification.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeeAllNotificationcomponent implements OnInit {

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
	lstNotification: Observable<any[]> =new Observable<any>();
	//NotificationCount: number = 0;
	NotificationCount: Observable<any> =new Observable<any>();
	lstAlert: Observable<any> =new Observable<any>();
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

	showNotifications() {
		debugger;
		//debugger;
		this.loaderShow = true;
		this.lodder.start();
		this.notificationsService.getSeeAllNotifications().subscribe(notificationData => {
			debugger;
			this.notificationmodel = notificationData["data"];
			this.NewMessageCount = notificationData["data"].filter(a => a.Active == "Y").length + ' ' + 'New Notification';
			this.lstNotification = of(notificationData["data"].filter(a => a.MessageType == "N"));
			this.lstAlert = of(notificationData["data"].filter(a => a.MessageType == "A"));
			this.NotificationCount = of(notificationData["data"].length);
			this.NotiCount = notificationData["data"].length;
			this.lodder.complete();
			this.loaderShow = false;
		});
	}
	ngOnInit() {
		this.showNotifications();
	}
	Route(notification) {
				this.notificationsService.markAsRead(notification.id).subscribe(d => {
					debugger;
					this.showNotifications();
				});
	}

}
