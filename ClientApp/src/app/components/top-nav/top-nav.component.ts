import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Output() logoutEvent = new EventEmitter<string>();
  constructor(public navService: NavService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.logoutEvent.emit('true')
  }

}
