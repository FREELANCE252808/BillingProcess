import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'm-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

	public barChartOptions: any = {
		scaleShowVerticalLines: false,
		responsive: true
	};
	public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	public barChartType: string = 'bar';
	public barChartLegend: boolean = true;

	public barChartData: any[] = [
		{data: [65, 59, 80, 81, 56, 55, 40], label: 'Department A'},
		{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Department B' },
		{ data: [30, 52, 34, 25, 70, 15, 80], label: 'Department C' }
	];

	constructor () { }

	ngOnInit () {
	}

	// events
	chartClicked (e: any): void {		
	}

	chartHovered (e: any): void {		
	}

}
