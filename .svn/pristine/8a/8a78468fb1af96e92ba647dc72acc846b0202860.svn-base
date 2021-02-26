import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanysService } from '../../../core/services/companys.service';
import { TypesUtilsService } from '../../../core/utils/types-utils.service';
import { CompanysModel } from '../../../core/models/companys.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LayoutRefService } from '../../../core/services/layout/layout-ref.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
	selector: 'm-companys-edit-dialog',
	templateUrl: './companys-edit.dialog.component.html',
	 changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanysEditDialogComponent implements OnInit {
	companys: CompanysModel;
	companysForm: FormGroup;
	hasFormErrors: boolean = false;
	loading: boolean = false;
	loaderShow = false;
	companyid: number = 0;
	constructor(
		private activatedRoute: ActivatedRoute,
		private fb: FormBuilder,	private router: Router,private route: ActivatedRoute,
		private companysService: CompanysService,
		private translate: TranslateService,
		private typesUtilsService: TypesUtilsService,
		private layoutRefService: LayoutRefService
		,public toastr: ToastrManager,
		public loaders: LoadingBarService) { }

	/** LOAD DATA */
	ngOnInit() {
		const newCompanys = new CompanysModel();
		newCompanys.clear();
		this.companys = newCompanys;
		this.createForm();
		this.loaderShow = true;
		this.loaders.start();
			this.loaderShow = true;
			this.loaders.start();
		this.companysService.getCompanyDetail().subscribe(res => {
			debugger;
			if (res.responseResultDto.data != undefined && res.responseResultDto.data != undefined) {

				this.companys = res.responseResultDto.data;
				this.companyid = this.companys.companyID;
				 this.createForm();
				 this.loaders.complete();
				 this.loaderShow = false;
			}
			else {
				this.loaders.complete();
				 this.loaderShow = false;
			}

		});

	}

	createForm() {

		    this.companysForm = this.fb.group({
		 	companyName: [this.companys.companyName, Validators.required],
		 	contactNumber: [this.companys.contactNumber],
		//	companyLogo: [this.companys.logoPath],
			companyAddress: [this.companys.companyAddress]
		});
	}

	getTitle(): string {

		return 'Company Detail';
	}

	isControlInvalid(controlName: string): boolean {
		const control = this.companysForm.controls[controlName];
		const result = control.invalid && control.touched;
		return result;
	}

	/** ACTIONS */
	preparecompany(): CompanysModel {
		const controls = this.companysForm.controls;
		const _company = new CompanysModel();
		_company.companyID = this.companyid;
		_company.companyName = controls['companyName'].value
		_company.contactNumber = controls['contactNumber'].value;
	//	_company.logoPath = controls['companyLogo'].value;
		_company.companyAddress = controls['companyAddress'].value;
		return _company;
	}

	onSubmit() {
		debugger;
		this.hasFormErrors = false;
		const controls = this.companysForm.controls;
		///** check form */
		if (this.companysForm.invalid) {
			Object.keys(controls).forEach(controlName =>
			controls[controlName].markAsTouched()
			);

			this.hasFormErrors = true;
			return;
		}

	    const AddeditedCompany = this.preparecompany();
		this.AddupdateCompany(AddeditedCompany);

	}

	AddupdateCompany(_company: CompanysModel) {
		this.loaderShow = true;
		this.loading = true;
		this.companysService.updateCompany(_company).subscribe(res => {
			debugger;
			if (res.responseResultDto.messageType == "S")
			{
			this.toastr.successToastr(res.responseResultDto.message, 'Success!');
			this.loaders.complete();
			this.loaderShow = false;
			this.loading = false;

		}
		if (res.responseResultDto.messageType == "E") {
			this.toastr.errorToastr(res.responseResultDto.message, 'Error!');
			this.loaders.complete();
			this.loaderShow = false;
			this.loading = false;

		}
		});
	}





	url = '';
	onSelectFile(event) {
		if (event.target.files && event.target.files[0]) {
			var reader = new FileReader();

			reader.readAsDataURL(event.target.files[0]);

			//reader.onload = (event) => {
			  // this.url = event.target.result;
			//}
		}
	}

}
