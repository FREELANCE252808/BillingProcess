import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { DashboardService } from '../../../../../core/services/dashboard.service';

@Component({
  selector: 'm-overDueWorkItems',
  templateUrl: './overDueWorkItems.component.html',
  styleUrls: ['./overDueWorkItems.component.scss']
})
export class OverDueWorkItemsComponent implements OnInit {

	OverdueWorkItemsData: any[] = [];
	overduedata: Observable<any[]> =new Observable<any>();
	startscrollNO: number = 0;
	endscrollNO: number = 30;
	loaderShow: boolean = false;

	constructor(public dashboardService: DashboardService,
		public loaders: LoadingBarService,) { }

	@HostListener('scroll', ['$event'])
	scrollHandler(event: any) {
		debugger;
		// visible height + pixel scrolled >= total height
		if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
			console.log("End");
			this.endscrollNO = this.endscrollNO + 20;
		}

	}

	ngOnInit() {
		debugger;
		this.loaderShow = true;
		this.loaders.start();
	/*	this.dashboardService.GetOverdueWorkItems().subscribe(res => {
			debugger;
			this.overduedata = of(res["data"]);
			this.OverdueWorkItemsData = res["data"];
			this.loaders.complete();
			this.loaderShow = false;

		});*/
	}

}
