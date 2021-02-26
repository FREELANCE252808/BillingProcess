import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { DashboardService } from '../../../../../core/services/dashboard.service';

@Component({
  selector: 'm-tasks',
  templateUrl: './tasks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit {

	toDoListData: any[] = [];
	barcolor: string = "m-widget2__item--primary";
	loaderShow: boolean = false;

	constructor(public dashboardService: DashboardService,
		public loaders: LoadingBarService) { }

	ngOnInit() {
		debugger;
		this.loaderShow = true;
		this.loaders.start();
	/*	this.dashboardService.GetDashboardToDoList().subscribe(res => {
			debugger;
			this.toDoListData = res["data"];
			//Message
			//RedirectURL
			//ToDoListType
			//ToDoListOrder
			this.loaders.complete();
			this.loaderShow = false;
		});*/
		this.loaders.complete();
		this.loaderShow = false;
	}

}
