
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { EmailIntegrationComponent } from '../emailIntegration/emailIntegration.component';
import { AccountService } from '../../../../core/auth/account.service';

@Component({
	selector: 'm-user-profile',
	templateUrl: './user-profile.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit {
	@HostBinding('class')
	// tslint:disable-next-line:max-line-length
	classes = 'm-nav__item m-topbar__user-profile m-topbar__user-profile--img m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light';
	userName: string;
	@HostBinding('attr.m-dropdown-toggle') attrDropdownToggle = 'click';

	@Input() avatar: string = localStorage.getItem('imagePath');
	@Input() avatarBg: SafeStyle = '';

	@ViewChild('mProfileDropdown') mProfileDropdown: ElementRef;
	UserName: string = "";
	constructor(
		public dialog: MatDialog,
		private router: Router,
		private authService: AccountService,
		private sanitizer: DomSanitizer
	) { }

	ngOnInit(): void {
		if (!this.avatarBg)
			this.avatarBg = this.sanitizer.bypassSecurityTrustStyle('url(./assets/app/media/img/misc/user_profile_bg.jpg)');


		this.UserName = localStorage.getItem('userame');
	}

	public logout() {

		this.authService.logout();
	}


	emailIntegration() {
		const dialogRef = this.dialog.open(EmailIntegrationComponent);
	}
	changePassword() {

		//const dialogRef = this.dialog.open(ChangePasswordComponent);
		//this.router.navigate(/Changepassword)
		this.router.navigate(['/Changepassword']);
	}





}
