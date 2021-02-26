import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'm-accessDenied-page',
	templateUrl: './accessDenied-page.component.html',
	styleUrls: ['./accessDenied-page.component.scss']
})
export class AccessDeniedPageComponent implements OnInit {


	errorType: number = 0;

	constructor(private route: ActivatedRoute) {
		this.errorType = Math.floor((Math.random() *6) + 1);
	}

	ngOnInit() {
	}

}
