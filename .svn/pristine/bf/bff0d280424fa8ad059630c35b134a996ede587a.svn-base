import {Component,OnInit,Output,Input,ViewChild,OnDestroy,ChangeDetectionStrategy,ChangeDetectorRef} from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import * as objectPath from 'object-path';
import { TranslateService } from '@ngx-translate/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { SpinnerButtonOptions } from '../../partials/content/general/spinner-button/button-options.interface';
import { AccountService } from '../../core/auth/account.service';
import { AuthNoticeService } from '../../core/auth/auth-notice.service';

@Component({
	selector: 'm-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
	public model: any = { email: '', password: '' };
	@Output() actionChange = new Subject<string>();
    public UserName: string = "Hi User";
    public ImagePath: string = "./assets/images/userProfile/profile-user.jpg";
	public loading: boolean = false;
	hide = true;
	@Input() action: string;
	@ViewChild('f') f: NgForm;
	errors: any = [];
	spinner: SpinnerButtonOptions = {active: false,spinnerSize: 18,raised: true,buttonColor: 'primary',spinnerColor: 'accent',fullWidth: false};
	PassErrorMessege: boolean = false;
	constructor(private authService: AccountService, private router: Router, public authNoticeService: AuthNoticeService,
		private translate: TranslateService, private cdr: ChangeDetectorRef,
		public loaders: LoadingBarService,public toaster: ToastrManager)
	{
	}

	submit() {
		debugger;
		  this.loading = true;
		this.loaders.start();
		this.spinner.active = true;
		if (this.validate(this.f)) {
			this.authService.login(this.model.email,this.model.password).subscribe(response => {
				debugger;
				//if (typeof response !== 'undefined' && response["loginRes"].MessageType == "S") {}
				if (response && response.authToken.token!=null && response.authToken.messageType != "I") {
					this.router.navigate(['/']);
				  }
				else if (typeof response && response.authToken.messageType == "I") {
					this.toaster.errorToastr("Invalid credential !", 'error!');
					this.loading = false;
					this.loaders.complete();
				}
				else {
					this.toaster.errorToastr("Invalid credential !", 'error!');
					this.loading = false;
					this.loaders.complete();
				}
				this.spinner.active = false;
				this.loading = false;
				this.cdr.detectChanges();
				//////////////test////////////////
				//const time_to_login = Date.now() + 60000//604800000; // one week
				//localStorage.setItem('timer', JSON.stringify(time_to_login));
				//////////////test////////////////
				this.loaders.complete();
			});
		}
	}

	ngOnInit(): void {

		if (!this.authNoticeService.onNoticeChanged$.getValue()) {
			const initialNotice = `Please enter your
			<strong>User Id</strong> and
			<strong>password</strong> to continue.`;
			this.authNoticeService.setNotice(initialNotice, 'success');
		}


	}

	ngOnDestroy(): void {
		this.authNoticeService.setNotice(null);
	}

	ValidateEmail() {
		this.loaders.start();
		this.authService.GetUserNameByEmailID(this.model.email,this.model.password).subscribe(responseData => {

			debugger;
			if (responseData.userName != "" && responseData.userName != "") {
				this.UserName = responseData.userName;
                this.ImagePath = responseData.imagePath;
				this.loaders.complete();
			}
			else {
                this.ImagePath = "./assets/images/userProfile/profile-user.jpg";
				this.UserName = "Enter valid email id.";// Hi firstname;
				this.loaders.complete();
			}
			this.loaders.complete();
		});
	}

	validate(f: NgForm) {
		if (f.form.status === 'VALID') {
			return true;
		}

		this.errors = [];
		if (objectPath.get(f, 'form.controls.email.errors.email')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
			this.loading = false;
			this.loaders.complete();
		}
		if (objectPath.get(f, 'form.controls.email.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
			this.loading = false;
			this.loaders.complete();
		}

		if (objectPath.get(f, 'form.controls.password.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', { name: this.translate.instant('AUTH.INPUT.PASSWORD') }));
			this.loading = false;
			this.loaders.complete();
		}
		if (objectPath.get(f, 'form.controls.password.errors.minlength')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.MIN_LENGTH', { name: this.translate.instant('AUTH.INPUT.PASSWORD') }));
			this.loading = false;
			this.loaders.complete();
		}

		if (this.errors.length > 0) {
			this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
			this.spinner.active = false;
			this.loading = false;
		}

		return false;
	}

	forgotPasswordPage(event: Event) {
		this.action = 'forgot-password';
		this.actionChange.next(this.action);
	}

	register(event: Event) {
		this.action = 'register';
		this.actionChange.next(this.action);
	}
}
