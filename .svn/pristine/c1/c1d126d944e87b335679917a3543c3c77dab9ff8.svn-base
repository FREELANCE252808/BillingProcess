import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangepasswordRoutingModule } from './changepassword-routing.module';
import { ChangePasswordComponent } from './changepassword/changePassword.component';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatSelectModule,
	MatMenuModule,
	MatCheckboxModule,
	MatDialogModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatAutocompleteModule,
	MatSnackBarModule,
	MatTooltipModule,
	MatFormFieldModule,
	MatBadgeModule,
	MatProgressBarModule,
	MatTabsModule,
	MatButtonModule
} from '@angular/material';
import { PortletModule } from '../partials/content/general/portlet/portlet.module';
import { PartialsModule } from '../partials/partials.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtIntercepterService } from '../core/auth/jwt.intercepter.service';
import { ChangePasswordService } from '../core/services/changePassword.service';
import { ToastrManager, ToastrModule } from 'ng6-toastr-notifications';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	// suppressScrollX: true
};
@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
	  CommonModule,
	  ChangepasswordRoutingModule,

	  CommonModule,
	  RouterModule,
	  CoreModule,
	  PerfectScrollbarModule,
	  NgbModule,
	  FormsModule,
	  ReactiveFormsModule,
	  MatProgressBarModule,
	  MatTabsModule,
	  ToastrModule.forRoot(),
	  MatButtonModule,
	  TranslateModule.forChild(),
	  LoadingBarModule.forRoot(),
	  MatCardModule,
	  MatInputModule,
	  MatPaginatorModule,
	  MatProgressSpinnerModule,
	  MatSortModule,
	  MatTableModule,
	  MatSelectModule,
	  MatMenuModule,
	  MatCheckboxModule,
	  MatDialogModule,
	  MatNativeDateModule,
	  MatCardModule,
	  MatRadioModule,
	  MatIconModule,
	  MatDatepickerModule,
	  MatAutocompleteModule,
	  MatSnackBarModule,
	  MatTooltipModule,
	  MatFormFieldModule,
	  PortletModule,
	  MatBadgeModule,
	  PartialsModule,
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
	ChangePasswordService,ToastrManager

],
})
export class ChangepasswordModule { }
