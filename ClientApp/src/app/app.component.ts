import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from './models/nav-item';
import { NavService } from './services/nav.service';
import { AuthService } from './views/login/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;

  constructor(private navService: NavService, private router: Router, public authService: AuthService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }


}
