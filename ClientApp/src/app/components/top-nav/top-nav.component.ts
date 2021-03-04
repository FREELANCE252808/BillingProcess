import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavService } from 'src/app/services/nav.service';
import { AccountService } from 'src/app/views/login/services/account.service';
import { CustomdialogComponent } from '../customdialog/customdialog.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  @Output() logoutEvent = new EventEmitter<string>();
  constructor(
    public navService: NavService,
    public dialog: MatDialog,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomdialogComponent, {
      width: '250px',
      data: {
        title: 'Logout?',
        message: 'Are you sure want to logout?',
        action: '',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == '') {
        this.logOut();
      }
    });
  }

  logOut() {
    this.accountService.logout();
  }
}
