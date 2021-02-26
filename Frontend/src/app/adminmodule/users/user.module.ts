import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { LoadingBarModule } from '@ngx-loading-bar/core';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { ToastrManager, ToastrModule } from 'ng6-toastr-notifications';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListModule } from '../../core/_shared/list/list.module';
import { JwtIntercepterService } from '../../core/auth/jwt.intercepter.service';
import { HttpUtilsService } from '../../core/utils/http-utils.service';
import { UsersService } from '../../core/services/users.service';
import { UsersEditDialogComponent } from './user-edit/users-edit.dialog.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	// suppressScrollX: true
};
@NgModule({
	declarations: [UserListComponent,UsersEditDialogComponent],

	  imports: [ CommonModule,MatProgressBarModule,MatTabsModule,
		MatSnackBarModule,
		MatTooltipModule,	MatSlideToggleModule,ListModule,
		MatExpansionModule,ToastrModule.forRoot(),LoadingBarModule.forRoot(),
		MatTreeModule,MatMenuModule,
		UserRoutingModule,ReactiveFormsModule,	FormsModule,CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatDatepickerModule,
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
			HttpUtilsService,ToastrManager,
			UsersService
		],
})
export class UserModule { }
