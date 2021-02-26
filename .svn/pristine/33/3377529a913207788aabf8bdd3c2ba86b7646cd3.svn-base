import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';// Material
import { MatDialog, MatPaginator, MatSort, MatSnackBar, MatTableDataSource } from '@angular/material';
// RXJS
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators'
import { TranslateService } from '@ngx-translate/core';

import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { EmailsModel } from '../../../core/models/emails.model';
import { ListColumn } from '../../../core/_shared/list/list-column.model';
import { EmailsService } from '../../../core/services/emails.service';
import { LayoutUtilsService } from '../../../core/utils/layout-utils.service';
import { Router } from '@angular/router';


@Component({
	selector: 'email-view',
	templateUrl: './email-view.component.html',
	styleUrls: ['./email-view.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailViewComponent implements OnInit, AfterViewInit {
	loaderShow = false;
	subject$: ReplaySubject<EmailsModel[]> = new ReplaySubject<EmailsModel[]>(1);
	data$: Observable<EmailsModel[]> = this.subject$.asObservable();
	emailsResult: EmailsModel[];

	@Input()
	columns: ListColumn[] = [

			{ name: 'Email Description', property: 'emailDesc', visible: true, isModelProperty: true },
			{ name: 'Email Subject', property: 'emailSubject', visible: true, isModelProperty: true },
			{ name: 'SMS Message', property: 'smsMessage', visible: true, isModelProperty: true },
			{ name: 'Status', property: 'status', visible: true, isModelProperty: true },
			{ name: 'Actions', property: 'actions', visible: true },

	] as ListColumn[];
	pageSize = 10;
	dataSource: MatTableDataSource<EmailsModel> | null;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	constructor(
		private emailsService: EmailsService,
		public dialog: MatDialog,	private router: Router,
		public snackBar: MatSnackBar,
		private layoutUtilsService: LayoutUtilsService,
		private translate: TranslateService,
		public loaders: LoadingBarService,
		public toastr: ToastrManager

	) { }

	get visibleColumns() { return this.columns.filter(column => column.visible).map(column => column.property); }
	/** LOAD DATA */
	ngOnInit() {
		debugger;
		this.loaderShow = true;
		this.loaders.start();
		this.emailsService.getAllEmail().subscribe(res => {
			debugger;
			if (res != undefined) {
				if (res.responseResultDto.messageType == "S") {
					this.emailsResult =res.responseResultDto.data;
					this.subject$.next(this.emailsResult);
				}
			}
		})
		this.dataSource = new MatTableDataSource();
		this.data$.pipe(
			filter(Boolean)
		).subscribe((email:EmailsModel[]) => {
			this.emailsResult = email;
			this.dataSource.data = email;
		});
		this.loaders.complete();
		this.loaderShow = false;
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	/** addEmail */
	addEmail() {
		const newEmail = new EmailsModel();
		newEmail.clear(); // Set all defaults fields
		this.editEmail(newEmail);
	}

	/** Edit */

	editEmail(email: EmailsModel) {
		debugger;
			this.router.navigate(['template/update/' + email.emailSMSTemplateID]);
	}
	addtemplate() {
		this.router.navigate(['template/add/']);
	}

	onFilterChange(value) {
		if (!this.dataSource) {
			return;
		}
		value = value.trim();
		value = value.toLowerCase();
		this.dataSource.filter = value;
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


}
