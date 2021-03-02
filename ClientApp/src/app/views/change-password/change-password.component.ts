import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilityService } from 'src/app/services/utility.service';
import { AuthService } from '../login/services/auth.service';
import { TokenStorage } from '../login/services/token-storage.service';
import { ChangePasswordModel } from './models/change-password-model';
import { ChangePasswordService } from './services/change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePassword: any =  {
    userId: '',
    newPassword: '',
    comfirmPassword: ''
  };
  constructor(private changePasswordService: ChangePasswordService,
    private tokenStorage: TokenStorage,
    private utilityService: UtilityService, private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
     this.tokenStorage.getuserID().subscribe(data=>{
      this.changePassword.userId = data;
      console.log('this.changePassword.userId', this.changePassword.userId);
    });

    //  For setting userId
    // localStorage.getItem
  }

  changePasswordMethod() {
    const result = !Object.values(this.changePassword).some(o=> o === '');
    if(!result){
      this.utilityService.openSnackbar(this.snackBar, 'Please fill all the mandatory fields to continue', '', 'red-snackbar');
      return;
    } else if(this.changePassword.newPassword !== this.changePassword.comfirmPassword){
      this.utilityService.openSnackbar(this.snackBar, 'New Password and Confirm Password should be same.', '', 'red-snackbar');
    } else {
       // Add API Call to Post change password
console.log('this.changePassword', this.changePassword)
       this.changePasswordService.updatePassword(this.changePassword)
       .subscribe((res:any) =>
       {
        debugger;
        if(res.responseDto.messageType=="S")
        {
          this.utilityService.openSnackbar(this.snackBar, res.responseDto.message, '', 'green-snackbar');

        }
        else
        {
          this.utilityService.openSnackbar(this.snackBar, res.responseDto.message, '', 'red-snackbar');

        }
      }, error=> {
        console.error(error)
      })
    }
  }




}
