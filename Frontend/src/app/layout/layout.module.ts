import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
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
	MatTooltipModule
} from '@angular/material';






import { HeaderComponent } from './header/header.component';
import { AsideLeftComponent } from './aside/aside-left.component';
import { FooterComponent } from './footer/footer.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { BrandComponent } from './header/brand/brand.component';
import { MenuSectionComponent } from './aside/menu-section/menu-section.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { UserProfileComponent } from './header/topbar/user-profile/user-profile.component';
import { SearchDropdownComponent } from './header/topbar/search-dropdown/search-dropdown.component';
import { QuickActionComponent } from './header/topbar/quick-action/quick-action.component';
import { AsideRightComponent } from './aside/aside-right/aside-right.component';
import { SearchDefaultComponent } from './header/topbar/search-default/search-default.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { LanguageSelectorComponent } from './header/topbar/language-selector/language-selector.component';
import { EmailIntegrationComponent } from './header/topbar/emailIntegration/emailIntegration.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressBarModule, MatTabsModule, MatButtonModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PortletModule } from '../partials/content/general/portlet/portlet.module';
import { TimeAgoPipe } from 'time-ago-pipe';
import { PartialsModule } from '../partials/partials.module';
import { JwtIntercepterService } from '../core/auth/jwt.intercepter.service';
import { ChangePasswordService } from '../core/services/changePassword.service';
import { EmailIntigrationService } from '../core/services/emailIntegration.service';
import { NotificationsService } from '../core/services/notifications.service';
import { CoreModule } from '../core/core.module';
import { NotificationComponent } from './header/topbar/notification/notification.component';
import { SeeAllNotificationcomponent } from './header/topbar/notification/SeeAllNotification.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	// suppressScrollX: true
};

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		SubheaderComponent,
		BrandComponent,
		NotificationComponent,
        SeeAllNotificationcomponent,
		// topbar components
		TopbarComponent,
		UserProfileComponent,
		SearchDropdownComponent,
		QuickActionComponent,
		LanguageSelectorComponent,
		// aside left menu components
		AsideLeftComponent,
		MenuSectionComponent,
		// horizontal menu components
		// aside right component
		AsideRightComponent,
		SearchDefaultComponent,
		HeaderSearchComponent,
		EmailIntegrationComponent,




	],
	exports: [
		HeaderComponent,
		FooterComponent,
		SubheaderComponent,
		BrandComponent,
		// topbar components
		TopbarComponent,
		UserProfileComponent,
		SearchDropdownComponent,
		QuickActionComponent,
		LanguageSelectorComponent,

		// aside left menu components
		AsideLeftComponent,
		// MenuSectionComponent,

		// horizontal menu components

		// aside right component
		AsideRightComponent,
		EmailIntegrationComponent,


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
		ChangePasswordService,
		EmailIntigrationService,
		NotificationsService

	],

	entryComponents: [
		EmailIntegrationComponent,

	],

	imports: [

		CommonModule,
		RouterModule,
		CoreModule,
		PerfectScrollbarModule,
		NgbModule,
		FormsModule,
		ReactiveFormsModule,
		MatProgressBarModule,
		MatTabsModule,
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
	]
})
export class LayoutModule {}
