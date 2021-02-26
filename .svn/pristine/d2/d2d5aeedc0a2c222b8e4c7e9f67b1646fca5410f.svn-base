import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedPageComponent } from '../accessDenied-page/accessDenied-page.component';
import { ActionComponent } from '../header/action/action.component';
import { ProfileComponent } from '../header/profile/profile.component';
import { SeeAllNotificationcomponent } from '../layout/header/topbar/notification/SeeAllNotification.component';
import { ErrorPageComponent } from '../snippets/error-page/error-page.component';
import { MasterpageComponent } from './masterpage.component';

const routes: Routes = [
	{
		path: '',component: MasterpageComponent,
		//canActivate: [AuthGuard],
		children: [
			{
				path: '',
				loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
			}
			,
			{
				path: 'company',
				loadChildren: 'app/adminmodule/companys/companys.module#CompanysModule'
			}
			,
			{
				path: 'roles',
				loadChildren: 'app/adminmodule/roleright/roleright.module#RolerightModule'
			}
			,
			{
				path: 'users',
				loadChildren: 'app/adminmodule/users/user.module#UserModule'
			}
			,
			{
				path: 'template',
				loadChildren: 'app/adminmodule/emailsSMSTemplate/emailsSMSTemplate.module#EmailsSMSTemplateModule'
			}

			,
			{
				path: 'helpcenter',
				loadChildren: 'app/helpcenter/helpcenter.module#HelpcenterModule'
			}
			,
			{
				path: 'project',
				loadChildren: 'app/projects/projects.module#ProjectsModule'
			}

			,
			{
				path: 'Changepassword',
				loadChildren: 'app/changepassword/changepassword.module#ChangepasswordModule'
			},
			{
				path: 'seeallnotification',
				component: SeeAllNotificationcomponent
			},

			{
				path: 'fileupload',
				loadChildren: 'app/file-upload/material.module#CustomMaterialModule'
			},

			{
				path: 'noti',
				loadChildren: 'app/layout/layout.module#LayoutModule'
			}
			,
			{
				path: 'builder',
				loadChildren: 'app/builder/builder.module#BuilderModule'
			},
			{
				path: 'header/actions',
				component: ActionComponent
			},
			{
				path: 'profile',
				component: ProfileComponent
			},
			{
				path: '404',
				component: ErrorPageComponent
			},
			{
				path: 'AccessDenied',
				component: AccessDeniedPageComponent
			}

		]
	},

	{
		path: 'login',
		//canActivate: [NgxPermissionsGuard],
		loadChildren: 'app/auth/auth.module#AuthModule',

	},
	{
		path: '404',
		component: ErrorPageComponent
	},
	{
		path: 'error/:type',
		component: ErrorPageComponent
	},


];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MasterPageRoutingModule {}
