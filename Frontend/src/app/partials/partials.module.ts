import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollTopComponent } from './layout/scroll-top/scroll-top.component';
import { TooltipsComponent } from './layout/tooltips/tooltips.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NoticeComponent } from './content/general/notice/notice.component';
import { PortletModule } from './content/general/portlet/portlet.module';
import { SpinnerButtonModule } from './content/general/spinner-button/spinner-button.module';
import { BlogComponent } from './content/widgets/general/blog/blog.component';
import { FinanceStatsComponent } from './content/widgets/general/finance-stats/finance-stats.component';
import { PackagesComponent } from './content/widgets/general/packages/packages.component';
import { TasksComponent } from './content/widgets/general/tasks/tasks.component';
import { SupportTicketsComponent } from './content/widgets/general/support-tickets/support-tickets.component';
import { RecentActivitiesComponent } from './content/widgets/general/recent-activities/recent-activities.component';
import { RecentNotificationsComponent } from './content/widgets/general/recent-notifications/recent-notifications.component';
import { BestSellerComponent } from './content/widgets/general/best-seller/best-seller.component';
import { AuthorProfitComponent } from './content/widgets/general/author-profit/author-profit.component';
import { WidgetChartsModule } from './content/widgets/charts/widget-charts.module';
import { StatComponent } from './content/widgets/general/stat/stat.component';
import { MatInputModule,
 MatSortModule,
 MatProgressSpinnerModule,
 MatTableModule,
 MatPaginatorModule,
 MatSelectModule,
 MatProgressBarModule,
 MatButtonModule,
 MatCheckboxModule,
 MatIconModule,
 MatTooltipModule} from '@angular/material';
import { TimeAgoPipe } from 'time-ago-pipe';
import { OverDueWorkItemsComponent } from './content/widgets/general/overDueWorkItems/overDueWorkItems.component';
import { TeamStatusComponent } from './content/widgets/general/teamStatus/teamStatus.component';
import { timesheetlistComponent } from './content/widgets/general/timesheet-list/timesheetList.component';
import { CoreModule } from '../core/core.module';
import { DashboardService } from '../core/services/dashboard.service';

@NgModule({
	declarations: [
		ScrollTopComponent,
		TooltipsComponent,
		NoticeComponent,
		BlogComponent,
		FinanceStatsComponent,
		PackagesComponent,
		TasksComponent,
		SupportTicketsComponent,
		RecentActivitiesComponent,
		RecentNotificationsComponent,
		BestSellerComponent,
		AuthorProfitComponent,
		StatComponent,
		TimeAgoPipe,
		OverDueWorkItemsComponent,
		TeamStatusComponent,
		timesheetlistComponent,
	],
	exports: [
		ScrollTopComponent,
		TooltipsComponent,
		NoticeComponent,
		BlogComponent,
		FinanceStatsComponent,
		PackagesComponent,
		TasksComponent,
		SupportTicketsComponent,
		RecentActivitiesComponent,
		RecentNotificationsComponent,
		BestSellerComponent,
		AuthorProfitComponent,
		StatComponent,
		TimeAgoPipe,
		PortletModule,
		SpinnerButtonModule,
		OverDueWorkItemsComponent,
		TeamStatusComponent,
		timesheetlistComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		NgbModule,
		PerfectScrollbarModule,
		CoreModule,
		PortletModule,
		SpinnerButtonModule,
		MatSortModule,
		MatProgressSpinnerModule,
		MatTableModule,
		MatPaginatorModule,
		MatSelectModule,
		MatProgressBarModule,
		MatButtonModule,
		MatCheckboxModule,
		MatIconModule,
		MatTooltipModule,
		WidgetChartsModule
	],
	providers: [
		DashboardService
	]
})
export class PartialsModule {}
