import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';
import { ChangePasswordModel } from '../../../../core/models/changePassword.model';
import { EmailIntigrationService } from '../../../../core/services/emailIntegration.service';
import { LayoutUtilsService, MessageType } from '../../../../core/utils/layout-utils.service';
export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
		const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
		return (invalidCtrl || invalidParent);
	}
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
	selector: 'email-integration',
	templateUrl: './emailIntegration.component.html'
})
export class EmailIntegrationComponent {
	myForm: FormGroup;
	matcher = new MyErrorStateMatcher();
	constructor(private formBuilder: FormBuilder, private emailIntigrationService: EmailIntigrationService, private translate: TranslateService, private layoutUtilsService: LayoutUtilsService) {
		this.myForm = this.formBuilder.group({
			SMPTHost: ['', [Validators.required]],
			password: ['', [Validators.required]],
			confirmPassword: ['']
		}, { validator: this.checkPasswords });

	}

	checkPasswords(group: FormGroup) { // here we have the 'passwords' group
		let pass = group.controls.password.value;
		let confirmPass = group.controls.confirmPassword.value;

		return pass === confirmPass ? null : { notSame: true }
	}

	verify() {
		debugger;
		var controls = this.myForm.controls;
		var formdata = new ChangePasswordModel();
		formdata.SmtpHostName = controls["SMPTHost"].value;
		formdata.NewPassword = controls["password"].value;
		let _arrtaskPostData: ChangePasswordModel[];
		_arrtaskPostData = new Array<ChangePasswordModel>();
		_arrtaskPostData.push(formdata);
		this.emailIntigrationService.EmailIntigrationverify(formdata).subscribe(response => {
			this.handleResponse(response, 'verify');
		});
	}
	Save() {
		debugger;
		var controls = this.myForm.controls;
		var formdata = new ChangePasswordModel();
		formdata.SmtpHostName = controls["SMPTHost"].value;
		formdata.NewPassword = controls["password"].value;
		let _arrtaskPostData: ChangePasswordModel[];
		_arrtaskPostData = new Array<ChangePasswordModel>();
		_arrtaskPostData.push(formdata);
		this.emailIntigrationService.EmailIntigrationSave(formdata).subscribe(response => {
			this.handleResponse(response, 'Save');
		});
	}
	handleResponse(res, action) {
		if (res != undefined) {
			if (res["MessageType"] == "S") {
				if (action == "verify") {
					this.layoutUtilsService.showActionNotification(this.translate.instant("AUTH.EMAILINTIGRATION.VERIFY.MESSAGE"), MessageType.Update, 10000, true, false);
				}
				else if (action == "Save") {
					this.layoutUtilsService.showActionNotification(this.translate.instant("AUTH.EMAILINTIGRATION.SAVE.MESSAGE"), MessageType.Create, 10000, true, false);
				}
			}
			else if (res["MessageType"] == "E") {
				this.layoutUtilsService.showActionNotification("AUTH.EMAILINTIGRATION.ERROR.ERROR", MessageType.Create, 10000, true, false);
			}

		}
	}
}
