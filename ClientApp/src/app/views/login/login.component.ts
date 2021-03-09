import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';
import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';
import { TokenStorage } from './services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  showCompanyList = [];
  showCompany = false;
  showLogin = true;
  sessionDate = new Date();
  selectedCompany = '';
  constructor(
    private accountService: AccountService,
    private tokenStorage: TokenStorage,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    public utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      selectedCompany: [''],
      sessionDate: [new Date()],
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  loginWithCompany() {
    if (this.loginForm.value.selectedCompany == '') {
      this.utilityService.openSnackbar(
        this.snackBar,
        'Please select company to continue',
        '',
        'red-snackbar'
      );
    } else {
      this.tokenStorage.setSessionDate(this.loginForm.value.sessionDate);
      this.tokenStorage.setCompanyID(this.loginForm.value.selectedCompany);
      this.router.navigateByUrl('/');
    }
  }

  login() {
    this.showCompanyList = [];
    this.selectedCompany = '';
    let data = this.loginForm.value;

    let login = {
      username: data.username,
      password: data.password,
      grantType: 'password',
      refreshtoken: '',
    };
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.accountService.login(login).subscribe((response) => {
      if (response && response.authToken.token != null) {
        this.showCompanyList = response.authToken.userCompanyList;
        if (this.showCompanyList && this.showCompanyList.length === 0) {
          this.utilityService.openSnackbar(
            this.snackBar,
            'No Company Mapped to User.',
            '',
            'red-snackbar'
          );
        }
        // this.router.navigateByUrl('/');
      } else if (typeof response && response.authToken.messageType == 'I') {
        this.utilityService.openSnackbar(
          this.snackBar,
          'Invalid Credentials',
          '',
          'red-snackbar'
        );
      } else {
        this.utilityService.openSnackbar(
          this.snackBar,
          'Invalid Credentials',
          '',
          'red-snackbar'
        );
      }
    });
  }
}
