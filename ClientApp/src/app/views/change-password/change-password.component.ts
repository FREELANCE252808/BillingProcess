import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilityService } from 'src/app/services/utility.service';
import { AuthService } from '../login/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePassword: any =  {
    userId: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  };
  constructor(private authService: AuthService,private utilityService: UtilityService, private snackBar: MatSnackBar) {
    this.changePassword = {
      userId: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    };
  }

  ngOnInit(): void {
    //  For setting userId
    // localStorage.getItem
  }

  changePasswordMethod() {
    const result = !Object.values(this.changePassword).some(o=> o === '');
    if(!result){
      this.utilityService.openSnackbar(this.snackBar, 'Please fill all the mandatory fields to continue', '', 'red-snackbar');
      return;
    } else if(this.changePassword.newPassword !== this.changePassword.confirmNewPassword){
      this.utilityService.openSnackbar(this.snackBar, 'New Password and Confirm Password should be same.', '', 'red-snackbar');
    } else {

    }
  }
}
