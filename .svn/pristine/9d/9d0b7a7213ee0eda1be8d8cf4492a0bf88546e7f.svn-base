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
import { Element } from '@angular/compiler';
import { AuthenticationService } from '../../core/auth/authentication.service';
import { AuthNoticeService } from '../../core/auth/auth-notice.service';
import { UsersRegistrationModel } from '../../core/models/userRegistration.model';
import { SpinnerButtonOptions } from '../../partials/content/general/spinner-button/button-options.interface';

@Component({
	selector: 'm-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	public model: any = { email: '' };
	@Input() action: string;
	@Output() actionChange = new Subject<string>();
	public loading = false;

	@ViewChild('f') f: NgForm;
	errors: any = [];
	@ViewChild("email") varemail: ElementRef;

	spinner: SpinnerButtonOptions = {
		active: false,
		spinnerSize: 18,
		raised: true,
		buttonColor: 'primary',
		spinnerColor: 'accent',
		fullWidth: false
	};

	constructor(
		private authService: AuthenticationService,
		public authNoticeService: AuthNoticeService,
		private translate: TranslateService
	) { }

	ngOnInit() { }

	loginPage(event: Event) {
		event.preventDefault();
		this.action = 'login';
		this.actionChange.next(this.action);
	}
	ValidateEmail() {


		this.authService.IsEmailIDRegister(this.model).subscribe(response => {
			debugger
			if (response != undefined && response == false) { }
			else {
				this.errors = [];

				this.errors.push(
					this.translate.instant('AUTH.VALIDATION.EMAILEXISTS',
						{ name: this.translate.instant('AUTH.INPUT.EMAILEXISTS') })
				);

				if (this.errors.length > 0) {
					this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
					this.spinner.active = false;
				}
				this.varemail.nativeElement.focus();
				this.varemail.nativeElement.innerHTML = "";


				return false;
			}

		});
	}

	submit() {
		this.spinner.active = true;
		if (this.validate(this.f)) {
			debugger;
			var controls = this.f.controls;
			var formdata = new UsersRegistrationModel();
			formdata.CompanyName = controls["companyname"].value;
			formdata.ContactNumber = controls["contactNumber"].value;
			formdata.FirstName = controls["firstname"].value;
			formdata.LastName = controls["lastname"].value;
			formdata.EmailID = controls["email"].value;
			formdata.Password = controls["password"].value;
			let _arrtaskPostData: UsersRegistrationModel[];
			_arrtaskPostData = new Array<UsersRegistrationModel>();
			_arrtaskPostData.push(formdata);
			this.authService.register(formdata).subscribe(response => {
				this.action = 'login';
				this.actionChange.next(this.action);
				this.spinner.active = false;
				this.authNoticeService.setNotice(this.translate.instant('AUTH.REGISTER.SUCCESS'), 'success');
			});
		}
	}

	validate(f: NgForm) {
		if (f.form.status === 'VALID') {
			return true;
		}

		this.errors = [];
		if (objectPath.get(f, 'form.controls.companyname.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.COMPANYNAME') }));
		}

		if (objectPath.get(f, 'form.controls.contactNumber.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.COMPANYCONTACT') }));
		}


		if (objectPath.get(f, 'form.controls.firstname.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.FIRSTNAME') }));
		}
		if (objectPath.get(f, 'form.controls.lastname.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.LASTNAME') }));
		}

		if (objectPath.get(f, 'form.controls.email.errors.email')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
		}
		if (objectPath.get(f, 'form.controls.email.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
		}

		if (objectPath.get(f, 'form.controls.password.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.PASSWORD') }));
		}
		if (objectPath.get(f, 'form.controls.password.errors.minlength')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.MIN_LENGTH', { name: this.translate.instant('AUTH.INPUT.PASSWORD'), min: 4 }));
		}

		if (objectPath.get(f, 'form.controls.rpassword.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.CONFIRM_PASSWORD') }));
		}

		if (objectPath.get(f, 'form.controls.agree.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.AGREEMENT_REQUIRED'));
		}

		if (this.errors.length > 0) {
			this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
			this.spinner.active = false;
		}

		return false;
	}
}
