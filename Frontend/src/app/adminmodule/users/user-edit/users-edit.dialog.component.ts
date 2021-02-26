import {AfterViewInit, Component, OnInit, ViewChild,ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { forkJoin, Subject } from 'rxjs';
import { RoleModel } from '../../../core/models/role.model';
import { UsersModel } from '../../../core/models/users.model';
import { UsersService } from '../../../core/services/users.service';
import { TypesUtilsService } from '../../../core/utils/types-utils.service';
import { LayoutRefService } from '../../../core/services/layout/layout-ref.service';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
	selector: 'm-users-edit-dialog',
	templateUrl: './users-edit.dialog.component.html',
	styleUrls: ['./users-edit.dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush


})
export class UsersEditDialogComponent implements OnInit, AfterViewInit {

	public reportingToCtrl: FormControl = new FormControl();
	protected _onDestroy = new Subject<void>();
	loading: boolean = false;
	loaderShow = false;
	userID: number = 0;
	public model: any = { email: '' };
	rolesModel: RoleModel[] = [];
	selectRoles: number[] = null;
	errors: any = [];
	@ViewChild("EmailId") varemail: ElementRef;
	users: UsersModel;
	usersForm: FormGroup;
	hasFormErrors: boolean = false;
	departID: number = 0;
	id: string;

	constructor(private activatedRoute: ActivatedRoute,

		private fb: FormBuilder,	private router: Router,private route: ActivatedRoute,
		private usersService: UsersService,
		private translate: TranslateService,
		private typesUtilsService: TypesUtilsService,
		private layoutRefService: LayoutRefService
		,public toastr: ToastrManager,
		public loaders: LoadingBarService) {
		debugger;
		const newUser = new UsersModel();
		newUser.clear();
		this.users = newUser;
		this.initUser();
		this.userID = +this.route.snapshot.paramMap.get('id');
		this.checked = (this.users.status == "A") ? "Active" : "InActive";

	}

	/** LOAD DATA */
	ngOnInit() {
		this.loaderShow = true;
		this.loaders.start();
		forkJoin(
			this.usersService.GetRoles()
		)
		.subscribe(([resRoles]) => {
			this.rolesModel = resRoles.data;
		});

		if (this.userID > 0) {
			this.loaderShow = true;
			this.loaders.start();
			debugger;
			forkJoin(
				this.usersService.GetUsersData(this.userID)
			).subscribe(([UserResDto]) => {
				this.users =UserResDto;
				this.selectRoles = this.users.roleId;
				this.initUser();
				this.usersForm.markAsTouched();
				this.loaders.complete();
				this.loaderShow = false;
			});
		}
	}
	initUser() {
		this.createForm();
		this.hasFormErrors = false;
		this.usersForm.markAsPristine();
		this.usersForm.markAsUntouched();
		this.usersForm.updateValueAndValidity();
		if (this.users.id > 0) { }
	}
	ngAfterViewInit(): void {
		// keep header element in the service
		//this.layoutRefService.addElement('users', this.el.nativeElement);
	}

	//initUser() {
		//this.createForm();
		//this.hasFormErrors = false;
		//this.usersForm.markAsPristine();
		//this.usersForm.markAsUntouched();
	//	this.usersForm.updateValueAndValidity();

	//}

	createForm1() {
		debugger;
		this.usersForm = this.fb.group({
		//	ImagePath: [this.users.ImagePath],
			FirstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
			LastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
			EmailId: ['', [Validators.required, Validators.email]],
			RoleId: [0, Validators.required],
			Status: [this.users.status == "A" ? true : false],
		});
	}
	createForm() {
		debugger;
		this.usersForm = this.fb.group({
		//	ImagePath: [this.users.ImagePath],
			FirstName: [this.users.firstName, [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
			LastName: [this.users.lastName, [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
			EmailId: [this.users.emailId, [Validators.required, Validators.email]],
			RoleId: [this.selectRoles, Validators.required],
			Status: [this.users.status == "A" ? true : false],
		});
	}

	/** UI */
	getTitle(): string {
		if (this.users.userID > 0) {
			return `Edit user '${this.users.firstName} ${this.users.lastName}'`;
		} return 'New user';
	}

	isControlInvalid(controlName: string): boolean {
		const control = this.usersForm.controls[controlName];
		const result = control.invalid && control.touched;
		return result;
	}
	onBack()
	{
		debugger;
		this.router.navigate(['/users/userlist']);
	}
	/** ACTIONS */
	onSubmit() {
		this.loading = true;
		this.loaderShow = true;
		this.loaders.start();
		this.hasFormErrors = false;
		const controls = this.usersForm.controls;
		/** check form */
		if (this.usersForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			this.hasFormErrors = true;
			return;
		}

		//this.usersForm.invalid;
		const editedUser = this.prepareuser();
		this.AddEditUsers(editedUser);

	}

	prepareuser(): UsersModel {
		const controls = this.usersForm.controls;
		const _user = new UsersModel();
		debugger;
		_user.userID =this.userID;
		//_user.ImagePath = controls['ImagePath'].value;
		_user.firstName = controls['FirstName'].value;
		_user.lastName = controls['LastName'].value;
		_user.emailId = controls['EmailId'].value;
		_user.roleId = controls['RoleId'].value;
		_user.status = controls['Status'].value==true?"A":"I";
		return _user;
	}



	AddEditUsers(_user: UsersModel) {

		//_user.formdat = this.formdata;
		this.usersService.AddEditUser(_user).subscribe(res => {
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



	//url = '';
	//public files: any;
	//onSelectFile(event) {
	//	this.files = event.target.files[0];
	//	if (event.target.files && event.target.files[0]) {
	//		var reader = new FileReader();
	//		reader.readAsDataURL(event.target.files[0]);
	//		reader.onload = (event) => {
	//		    this.url = event.target["result"];
	//		}
	//	}
	//	const formData = new FormData();
	//	formData.append('UserID', this.UserID.toString());
	//	formData.append('filename', this.files);
	//	this.usersService.UploadUserImg(formData).subscribe(data => {
	//	});
	//}

	checked: string ='Inactive';
	disabled = false;
	onChange(value) {

		if (value.checked === true) {
			this.checked = "Active";

		} else {
			this.checked = "Inactive";

		}
	}


	ErroMsg: string = "";
	IsEmailExist: boolean = false;
	emailerror: string = "";
	ValidateEmail() {
		debugger;
		this.usersService.IsEmailIDRegister(this.model.email, this.userID).subscribe(response => {
			debugger
			if (response==true) {
				this.IsEmailExist = true;
				this.emailerror == "emailerror";
			}
			else {
				this.IsEmailExist = false;
				this.emailerror == "";
			}
		});
	}

}
