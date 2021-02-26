import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolePermissonComponent } from './role-Permission/role-Permission.component';
import { RoleEditDialogComponent } from './role-edit/role-edit.dialog.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RolerightRoutingModule } from './roleright-routing.module';
import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatSelectModule,

	MatProgressBarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatAutocompleteModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
	MatSnackBarModule,
	MatTooltipModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatExpansionModule,
	MatTreeModule,
	MatGridListModule,
	MatFormFieldModule,
	MatChipsModule,
	MatDividerModule,
	MatToolbarModule,
	MatOptionModule,
	MatListModule,
	MatSidenavModule, MatMenuModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtIntercepterService } from '../../core/auth/jwt.intercepter.service';
import { HttpUtilsService } from '../../core/utils/http-utils.service';
import { RoleService } from '../../core/services/role.service';
import { jqxCheckBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox';
import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';
import { CommonService } from '../../core/services/common.service';
import { ToastrManager, ToastrModule } from 'ng6-toastr-notifications';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { ListModule } from '../../core/_shared/list/list.module';
import { CoreModule } from '../../core/core.module';
//import { DeleteEntityDialogComponent } from '../../core/_shared/delete-entity-dialog/delete-entity-dialog.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	// suppressScrollX: true
};
@NgModule({
  declarations: [RolePermissonComponent,jqxTreeComponent,
	jqxCheckBoxComponent,RoleEditDialogComponent,RoleListComponent],

  imports: [ CommonModule,MatProgressBarModule,MatTabsModule,
	MatSnackBarModule,CoreModule,
	MatTooltipModule,	MatSlideToggleModule,ListModule,
	MatExpansionModule,ToastrModule.forRoot(),
	MatTreeModule,MatMenuModule,
    RolerightRoutingModule,ReactiveFormsModule,	FormsModule,CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatDatepickerModule,
    MatSliderModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule,
     MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatSidenavModule, MatListModule, MatRadioModule, MatSliderModule],

  exports: [ReactiveFormsModule,	FormsModule,	CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule,
    MatDatepickerModule, MatDividerModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule,
	 MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatSidenavModule, MatListModule, MatRadioModule, MatSliderModule],

	 entryComponents: [

		],

	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	  ],
	 providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: JwtIntercepterService,
			multi: true
		},
		HttpUtilsService,CommonService,ToastrManager,
		RoleService
	],


})
export class RolerightModule { }
