import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { MatCardModule } from '@angular/material/card';

import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import {
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	MatCheckboxModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { AuthNoticeComponent } from './auth-notice/auth-notice.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastrModule } from 'ng6-toastr-notifications';
import { SpinnerButtonModule } from '../partials/content/general/spinner-button/spinner-button.module';



@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatCheckboxModule,
		MatProgressBarModule,
		TranslateModule.forChild(),
		ToastrModule.forRoot(),
		SpinnerButtonModule,
		RouterModule.forChild([
			{
				path: '',
				component: AuthComponent
			}
		])
	],
	providers: [],
	declarations: [
		AuthComponent,
		LoginComponent,
		RegisterComponent,
		ForgotPasswordComponent,
		AuthNoticeComponent,

	],
	exports: []
})
export class AuthModule {}
