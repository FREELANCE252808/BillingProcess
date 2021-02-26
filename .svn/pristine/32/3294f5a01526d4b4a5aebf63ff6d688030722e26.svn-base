import {
	Component,
	OnInit,
	Input,
	Output,
	ViewChild,
	ElementRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import * as objectPath from 'object-path';
import { TranslateService } from '@ngx-translate/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { SpinnerButtonOptions } from '../../partials/content/general/spinner-button/button-options.interface';
import { AuthenticationService } from '../../core/auth/authentication.service';
import { AuthNoticeService } from '../../core/auth/auth-notice.service';
import { AccountService } from '../../core/auth/account.service';

@Component({
	selector: 'm-forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
	public model: any = { email: '' };
	@Input() action: string;
	@Output() actionChange = new Subject<string>();
	public loading:boolean = false;
	@ViewChild('f') f: NgForm;
	errors: any = [];
	spinner: SpinnerButtonOptions = {
		active: false,
		spinnerSize: 18,
		raised: true,
		buttonColor: 'primary',
		spinnerColor: 'accent',
		fullWidth: false
	};

	constructor(
		private authService: AccountService,
		public authNoticeService: AuthNoticeService,
		private translate: TranslateService,
		public toastr: ToastrManager
	) {}

	ngOnInit() {}

	loginPage(event: Event) {
		event.preventDefault();
		this.action = 'login';
		this.actionChange.next(this.action);
	}

	submit() {
		debugger;

		this.spinner.active = true;
		if (this.validate(this.f)) {
			debugger;
			this.loading = true;
			this.authService.requestPassword(this.model.email).subscribe(response => {
				debugger;

				if (response.responseResult.messageType == 'S') {
					this.toastr.successToastr(response.responseResult.message);
					this.action = 'login';
					this.actionChange.next(this.action);
				} else {
					// tslint:disable-next-line:max-line-length
					this.toastr.errorToastr(response.responseResult.message);
					//this.authNoticeService.setNotice(this.translate.instant('AUTH.VALIDATION.NOT_FOUND', {name: this.translate.instant('AUTH.INPUT.EMAIL')}), 'error');
				}
				this.loading = false;
				this.spinner.active = false;
			});
		}
	}

	validate(f: NgForm) {
		if (f.form.status === 'VALID') {
			return true;
		}

		this.errors = [];
		if (objectPath.get(f, 'form.controls.email.errors.email')) {
			this.toastr.errorToastr(this.translate.instant("Please enter valid email id."));
			this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', {name: this.translate.instant('AUTH.INPUT.EMAIL')}));
		}
		if (objectPath.get(f, 'form.controls.email.errors.required')) {
			this.toastr.errorToastr(this.translate.instant("Please enter valid email id."));
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', {name: this.translate.instant('AUTH.INPUT.EMAIL')}));
		}

		if (this.errors.length > 0) {
			this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
			this.spinner.active = false;
		}

		return false;
	}
}
