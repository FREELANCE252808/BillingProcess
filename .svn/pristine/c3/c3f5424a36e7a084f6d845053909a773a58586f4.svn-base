import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy  } from '@angular/core';
// Material
import { MatDialog, MatPaginator, MatSort, MatSnackBar, MatTableDataSource } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/internal/Observable';
import { filter } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
// Models
// Components
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrManager } from 'ng6-toastr-notifications';

import { Router } from '@angular/router';
import { UsersModel } from '../../../core/models/users.model';
import { ListColumn } from '../../../core/_shared/list/list-column.model';
import { UsersService } from '../../../core/services/users.service';
import { LayoutUtilsService } from '../../../core/utils/layout-utils.service';

@Component({
	selector: 'm-user-list',
	templateUrl: './user-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit, AfterViewInit {
	[x: string]: any;
	loaderShow = false;
	subject$: ReplaySubject<UsersModel[]> = new ReplaySubject<UsersModel[]>(1);
	data$: Observable<UsersModel[]> = this.subject$.asObservable();
	usersResult: UsersModel[];

	@Input()
	columns: ListColumn[] = [
			{ name: 'First Name', property: 'firstName', visible: true, isModelProperty: true },
			{ name: 'Last Name', property: 'lastName', visible: true, isModelProperty: true },
			{ name: 'EmailID', property: 'emailId', visible: true, isModelProperty: true },
			{ name: 'Status', property: 'status', visible: true, isModelProperty: true },
			{ name: 'Actions', property: 'actions', visible: true },
	] as ListColumn[];
	pageSize = 10;
	dataSource: MatTableDataSource<UsersModel> | null;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private userService: UsersService,
		public dialog: MatDialog,
		public snackBar: MatSnackBar,
		private router: Router,
		private layoutUtilsService: LayoutUtilsService,
		private translate: TranslateService,
		public loaders: LoadingBarService,
		public toastr: ToastrManager
	) {}


	get visibleColumns() { return this.columns.filter(column => column.visible).map(column => column.property); }

	ngOnInit() {

		this.loaderShow = true;
		this.loaders.start();
		this.userService.getAllUsers().subscribe(usersdata => {

			debugger;
			if (usersdata != undefined) {
				if (usersdata.responseResultDto.messageType == "S") {
					this.usersResult = usersdata.responseResultDto.data;
					this.subject$.next(this.usersResult);
				}
			}
			this.loaders.complete();
			this.loaderShow = false;
		})
		this.dataSource = new MatTableDataSource();

		this.data$.pipe(
			filter(Boolean)
		).subscribe((users:UsersModel[]) => {
			this.usersResult = users;
			this.dataSource.data = users;
		});
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}


	checkBeforeDeleteData(_item: UsersModel) {
				this.deleteRole(_item);
	}

	/** ACTIONS */
	/** single Delete */
	deleteRole(_item: UsersModel) {
		debugger;
		const _title: string = this.translate.instant('ADMIN.USER.DELETE_USER_SIMPLE.TITLE');
		const _description: string = this.translate.instant('ADMIN.USER.DELETE_USER_SIMPLE.DESCRIPTION');
		const _waitDesciption: string = this.translate.instant('ADMIN.USER.DELETE_USER_SIMPLE.WAIT_DESCRIPTION');
		const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
		dialogRef.afterClosed().subscribe(res => {
			if (!res) {
				return;
			}

			this.userService.deleteUser(_item.userID).subscribe(a => {
				this.handleResponse(a, 'Delete');
			});
		});
	}
    /** Multiple Delete */
	//deleteRoles() {
	//	const _title: string = this.translate.instant('ADMIN.ROLE.DELETE_ROLE_MULTY.TITLE');
	//	const _description: string = this.translate.instant('ADMIN.ROLE.DELETE_ROLE_MULTY.DESCRIPTION');
	//	const _waitDesciption: string = this.translate.instant('ADMIN.ROLE.DELETE_ROLE_MULTY.WAIT_DESCRIPTION');
	//	const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
	//	dialogRef.afterClosed().subscribe(res => {
	//		if (!res) {
	//			return;
	//		}
	//		let idsForDeletion = "";
	//		for (let i = 0; i < this.selection.selected.length; i++) {

	//			idsForDeletion = idsForDeletion == "" ? this.selection.selected[i].id.toString() : idsForDeletion + "," + this.selection.selected[i].id.toString();
	//		}
	//		this.roleService
	//			.deleteRole(idsForDeletion)
	//			.subscribe(a => {
	//				this.handleResponse(a, 'Delete');
	//				this.selection.clear();
	//			});
	//	});
	//}
	 /** add Role */
	addUser() {
		this.router.navigate(['users/add/']);
	}

	/** Edit */
	editUser(user: UsersModel) {
		debugger;
			this.router.navigate(['users/update/' + user.userID]);
	}
	getItemStatusString(status: any = "A"): string {
		switch (status) {
			case "A":
				return 'Active';
			case 'I':
				return 'Inactive';
		}
		return '';
	}

	getItemCssClassByStatus(status: any = "A"): string {
		switch (status) {
			case "A":
				return 'success';
			case "I":
				return 'danger';
		}
		return '';
	}
	handleResponse(res, action) {
		debugger;
		if (res != undefined) {
			if (res.responseResultDto.messageType == "S") {
				this.usersResult = res.responseResultDto["data"];
				this.subject$.next(this.usersResult);
				this.dataSource = new MatTableDataSource(this.usersResult);
				this.dataSource.sort = this.sort;
				this.dataSource.paginator = this.paginator;
				this.toastr.successToastr(this.translate.instant("ADMIN.ROLE.DELETE_ROLE_MULTY.MESSAGE"));
			}
			else
			{
				this.toastr.errorToastr(this.translate.instant(res.responseResultDto.message));
			}
		}
	}

	onFilterChange(value) {
		if (!this.dataSource) {
			return;
		}
		value = value.trim();
		value = value.toLowerCase();
		this.dataSource.filter = value;
	}





	permission(user: UsersModel) {
		this.router.navigate(['admin/rolerights/' + user.userID]);
	}
	/** SELECTION */
	//isAllSelected() {
	//	const numSelected = this.selection.selected.length;
	//	const numRows = this.dataSource.data.length;
	//	return numSelected === numRows;
	//}
	//masterToggle() {

	//	if (this.selection.selected.length === this.dataSource.data.length) {
	//		this.selection.clear();
	//	} else {
	//		this.dataSource.data.forEach(row => this.selection.select(row));
	//	}
	//}


}
