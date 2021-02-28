import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  showCompanyList = [];
  showCompany = false;
  showLogin = true;
  sessionDate = new Date();
  constructor(private authService: AuthService,
     private router: Router,
     private formBuilder: FormBuilder,
     private snackBar: MatSnackBar,
     public utilityService: UtilityService) { }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get formControls() { return this.loginForm.controls; }

  login(){
    console.log(this.loginForm.value);
    let login = this.loginForm.value;
    login.grantType = "password";
    login.refreshtoken = ""
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    console.log('login',login)
    this.authService.login(login).subscribe(response=> {
        if (response && response.authToken.token!=null && response.authToken.messageType != "I") {
          this.showCompany = true;
          this.showLogin = false;
          // Set Local Storage and other related data
        }
        else if (typeof response && response.authToken.messageType == "I") {
          this.showCompany = false;
          this.showLogin = true;
          this.utilityService.openSnackbar(this.snackBar,'Invalid Credentials', '', 'red-snackbar');
        }
        else {
          this.utilityService.openSnackbar(this.snackBar,'Invalid Credentials', '', 'red-snackbar');
          this.showCompany = false;
          this.showLogin = true;
        }
      });

  }

}
