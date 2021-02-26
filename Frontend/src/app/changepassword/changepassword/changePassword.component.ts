import {
	Component,
	OnInit,
	Input,
	Output,
	ViewChild,
	ElementRef,
	ChangeDetectionStrategy
} from '@angular/core';
import * as objectPath from 'object-path';
import { NgForm, FormControl, FormGroupDirective } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ChangePasswordModel } from '../../core/models/changePassword.model';
import { ChangePasswordService } from '../../core/services/changePassword.service';
import { AccountService } from '../../core/auth/account.service';
import { Router } from '@angular/router';
import { MustMatch } from '../../shared/must-match.validator';;


export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
		const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

		return (invalidCtrl || invalidParent);
	}
}


@Component({
	selector: 'm-designaa',
	templateUrl: './changePassword.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePasswordComponent implements OnInit {
	//public model: any = { OldPassword: '' };
	//@Input() action: string;
	//@Output() actionChange = new Subject<string>();
	//@ViewChild('f') f: NgForm;
	//errors: any = [];
	//@ViewChild("OldPassword") Opassword: ElementRef;
	changePassword: ChangePasswordModel;
	loaderShow: boolean = false;
	myForm: FormGroup;
	hasFormErrors: boolean = false;
	ErroMsg: string = "";
	ErroNotSameMsg: string = "";
	SubmitBtn: boolean = true;
	hide = true;

	constructor(private fb: FormBuilder,private router: Router,
		private passwordService: ChangePasswordService,
		public authNoticeService: AccountService,
		private translate: TranslateService,
		public loaders: LoadingBarService,
		//public dialogRef: MatDialogRef<ChangePasswordComponent>,
		public toastr: ToastrManager, )
	{
		this.ErroMsg = "";
		this.ErroNotSameMsg = "";


	}

	/** LOAD DATA */
	ngOnInit() {
		this.myForm = this.fb.group({
			OldPassword: ['', [Validators.required]],
			password: ['', [Validators.required]],
			confirmPassword: ['', [Validators.required]]
		} , {
            validator: MustMatch('password', 'confirmPassword')
        });
	}
	// convenience getter for easy access to form fields
	get f() { return this.myForm.controls; }


	checkPasswords(confirmPassword,password) { // here we have the 'passwords' group
		debugger;
		let pass = password.value;
		let confirmPass = confirmPassword.value;
		if (pass != confirmPass) {
			this.ErroNotSameMsg = "notSame";
		}
	}
	prepare(): ChangePasswordModel {
		const controls = this.myForm.controls;
		const _changePassword = new ChangePasswordModel();
		_changePassword.OldPassword = controls['OldPassword'].value;
		_changePassword.NewPassword = controls['password'].value;
		return _changePassword;
	}

	onSubmit() {
		debugger;
		this.hasFormErrors = false;
		const controls = this.myForm.controls;
		/** check form */
		if (this.myForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			this.hasFormErrors = true;
			return;
		}

	/*	if (this.myForm.invalid) {
            return;
        }*/

		const formData = this.prepare();
		this.changePass(formData);
	}

	changePass(data: ChangePasswordModel) {
		debugger;
		this.loaderShow = true;
		this.loaders.start();
		this.passwordService.ChangePassword(data).subscribe(response => {
			debugger;
			if (response.responseResultDto.messageType == 'E') {
				this.toastr.errorToastr(this.translate.instant("Something went wrong."));
			}
			else if (response.responseResultDto.messageType == 'EmailFailure') {
				this.toastr.successToastr(this.translate.instant("Password changed successfully."));
				this.loaders.complete();
			this.loaderShow = false;
				this.authNoticeService.logout();
			}
			else if (response.responseResultDto.messageType == 'S') {
				this.toastr.successToastr(this.translate.instant("Password changed successfully."));
				this.loaders.complete();
			this.loaderShow = false;
				this.authNoticeService.logout();
			}

			//this.dialogRef.close({
			//});
		});
	}

	ValidateOldPassword() {
		debugger;
		var oldpassword = this.myForm.controls['OldPassword'].value;
		this.loaderShow = true;
		this.loaders.start();
		this.passwordService.IsOldPasswordExist(oldpassword).subscribe(response => {
			debugger;
			if (response.responseResultDto.messageType == 'oldpasswordNotMatch') {
				this.ErroMsg = "Password does not exist";
				this.SubmitBtn = true;
			}
			else if (response.responseResultDto.messageType == 'oldNewSame') {
				this.ErroMsg = "Change Password and existing password both are same";
				this.SubmitBtn = true;
			}
			else if (response.responseResultDto.messageType == 'E') {
				this.ErroMsg = "Bad request";
				this.SubmitBtn = true;
			}
			else {
				this.ErroMsg = "";
				this.SubmitBtn = false;
			}
			this.loaders.complete();
			this.loaderShow = false;
			return false;
		});

	}


	//submit() {
	//	debugger;
	//	this.loaderShow = true;
	//	this.loaders.start();
	//	//this.spinner.active = true;
	//	if (this.validate(this.f)) {
	//		debugger;
	//		var controls = this.f.controls;
	//		var formdata = new ChangePasswordModel();
	//		formdata.OldPassword = controls["OldPassword"].value;
	//		formdata.NewPassword = controls["NewPassword"].value;

	//		let _arrtaskPostData: ChangePasswordModel[];
	//		_arrtaskPostData = new Array<ChangePasswordModel>();
	//		_arrtaskPostData.push(formdata);
	//		this.passwordService.ChangePassword(formdata).subscribe(response => {
	//			if (response.MessageType == 'E') {
	//				//this.authNoticeService.setNotice(this.translate.instant('AUTH.VALIDATION.PASSWORD_CHANGE'), 'success');
	//				this.toastr.errorToastr(this.translate.instant("Something went wrong."));
	//			}
	//			else if (response.MessageType == 'EmailFailure') {
	//				//this.authNoticeService.setNotice(this.translate.instant('AUTH.VALIDATION.PASSWORD_CHANGE'), 'success');
	//				this.toastr.errorToastr(this.translate.instant("Something went wrong."));
	//			}
	//			else if (response.MessageType == 'S') {
	//				//this.authNoticeService.setNotice(this.translate.instant('AUTH.VALIDATION.PASSWORD_CHANGE'), 'success');
	//				this.toastr.successToastr(this.translate.instant("Password has been successfully change."));
	//			}
	//			this.loaders.complete();
	//			this.loaderShow = false;
	//			this.dialogRef.close({

	//			});
	//		});
	//	}
	//}


	//validate(f: NgForm) {
	//	if (f.form.status === 'VALID') {
	//		return true;
	//	}

	//	this.errors = [];
	//	if (objectPath.get(f, 'form.controls.NewPassword.errors.required')) {
	//		this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.NEW_PASSWORD') }));
	//	}
	//	if (objectPath.get(f, 'form.controls.NewPassword.errors.minlength')) {
	//		this.errors.push(this.translate.instant('AUTH.VALIDATION.MIN_LENGTH', { name: this.translate.instant('AUTH.INPUT.NEW_PASSWORD'), min: 4 }));
	//	}

	//	if (objectPath.get(f, 'form.controls.ConfirmPassword.errors.required')) {
	//		this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.CONFIRM_PASSWORD') }));
	//	}

	//	if (this.errors.length > 0) {
	//		this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
	//		//this.spinner.active = false;
	//	}

	//	return false;
	//}
}
