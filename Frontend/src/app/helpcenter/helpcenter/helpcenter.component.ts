import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'm-helpcenter',
  templateUrl: './helpcenter.component.html',
  styleUrls: ['./helpcenter.component.scss']
})
export class HelpcenterComponent implements OnInit {

	name = 'Set iframe source';
	url: string = "https://material.angular.io/components/checkbox/overview";
	urlSafe: SafeResourceUrl;

  	title: string = 'Anuglar Material  Guide Tour';
  	constructor(public sanitizer: DomSanitizer) { }

	ngOnInit() {

	this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
