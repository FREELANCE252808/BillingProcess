import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { PartialsModule } from '../partials/partials.module';
import { WidgetChartsModule } from '../partials/content/widgets/charts/widget-charts.module';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtIntercepterService } from '../core/auth/jwt.intercepter.service';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	// suppressScrollX: true
};
@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		PartialsModule,
		WidgetChartsModule,
		RouterModule.forChild([
			{
				path: '',
				component: DashboardComponent
			}
		])



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
		}
	],
	declarations: [DashboardComponent]
})
export class DashboardModule { }
