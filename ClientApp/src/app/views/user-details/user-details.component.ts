import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';
import { AccountService } from '../login/services/account.service';
import { TokenStorage } from '../login/services/token-storage.service';
import { UserDetails } from './models/UserDetails';
import { UserDetailsService } from './services/user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnChanges {
  @ViewChild('userDetailsSideNav') sideNav: MatSidenav;

  userDetails: UserDetails[] = [];
  addOrEditUserDetail: UserDetails;
  dataSource = new MatTableDataSource<any>();
  //  {header: 'Password', name: 'password', class:'sm', type: 'string',sticky: false},
  tableData = [
    {
      header: 'Action',
      name: 'userId',
      class: 'sm',
      type: 'string',
      sticky: true,
    },
    {
      header: 'First Name',
      name: 'firstName',
      class: 'sm',
      type: 'string',
      sticky: false,
    },
    {
      header: 'Last Name',
      name: 'lastName',
      class: 'sm',
      type: 'string',
      sticky: false,
    },
    {
      header: 'User Name',
      name: 'userName',
      class: 'sm',
      type: 'string',
      sticky: false,
    },
    {
      header: 'Company',
      name: 'userCompanyList',
      class: 'sm',
      type: 'array',
      sticky: false,
    },
    {
      header: 'Is Admin',
      name: 'isAdmin',
      class: 'sm',
      type: 'boolean',
      sticky: false,
    },
    {
      header: 'Is Active',
      name: 'isActive',
      class: 'sm',
      type: 'boolean',
      sticky: false,
    },
  ];
  displayedColumns = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  listOfCompanies = [];
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private utilityService: UtilityService,
    private snackBar: MatSnackBar,
    private tokenStorage: TokenStorage,
    private accountService: AccountService,
    private userDetailsService: UserDetailsService,
    private router: Router
  ) {
    this.userDetailsService.getAllCompanies().subscribe((data: any) => {
      this.listOfCompanies = JSON.parse(data.responseDto).ConpanyList;
    });
  }

  ngOnInit(): void {
    this.tokenStorage.getisAdmin().subscribe((isAdmin) => {
      if (isAdmin == 'true') {
        return;
      } else {
        this.utilityService.openSnackbar(
          this.snackBar,
          'You are not authorized to change this document.',
          '',
          'red-snackbar'
        );
        this.router.navigateByUrl('/');
      }
    });
    this.registerForm = this.formBuilder.group({
      userId: [0],
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      isAdmin: [false],
      isActive: [true],
      userCompanyList: [[]],
      // userCompanyList: this.formBuilder.array([])
      // userCompanyList: this.formBuilder.array([], Validators.required)
    });
    this.displayedColumns = this.tableData.map((data) => data.name);
    // API Call and assign value to user details
    // API Call for companies also and assing it to listOfCompanies

    this.getAllUsers();

    /* this.userDetails = [{
      userId: 0,
      firstName: "Shreyash",
      lastName: "Atal",
      userName: "shreyash",
      password: "shreyash",
      userCompanyList: [{companyId: '1', companyName: 'abc'}, {companyId: '2', companyName: 'bcd'}],
      isAdmin: true,
      isActive: true
    },{
      userId: 1,
      firstName: "Bipin",
      lastName: "Singh",
      userName: "Bipin",
      password: "Bipin",
      userCompanyList: [{companyId: '1', companyName: 'abc'}, {companyId: '2', companyName: 'bcd'}],
      isAdmin: true,
      isActive: true
    }];*/

    this.setMatTable(this.userDetails);
  }

  ngOnChanges(): void {
    this.setMatTable(this.userDetails);
  }

  get f() {
    return this.registerForm.controls;
  }

  getAllUsers(): void {
    this.userDetailsService.GetAllUsers().subscribe(
      (data: any) => {
        this.userDetails = data.responseDto.userReqDto;
        this.setMatTable(this.userDetails);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  setMatTable(userDetails) {
    setTimeout(() => {
      this.dataSource.data = userDetails;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  addUser(): void {
    this.addOrEditUserDetail = new UserDetails();
    this.registerForm.patchValue(this.addOrEditUserDetail);

    this.sideNav.open();
  }

  editUserDetails(event): void {
    this.addOrEditUserDetail = this.userDetails.filter(
      (data) => data.userId === event
    )[0];

    this.registerForm.patchValue(this.addOrEditUserDetail);
    this.sideNav.open();
  }

  submitUserDetails(): void {
    this.submitted = true;
    this.addOrEditUserDetail = new UserDetails();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    //this.registerForm.value
    this.addOrEditUserDetail.firstName = this.registerForm.value.firstName;
    this.addOrEditUserDetail.lastName = this.registerForm.value.lastName;
    this.addOrEditUserDetail.isActive = this.registerForm.value.isActive;
    this.addOrEditUserDetail.isAdmin = this.registerForm.value.isAdmin;
    this.addOrEditUserDetail.userId = this.registerForm.value.userId;
    this.addOrEditUserDetail.password = this.registerForm.value.password;
    this.addOrEditUserDetail.userCompanyList = this.registerForm.value.userCompanyList;
    this.addOrEditUserDetail.userName = this.registerForm.value.userName;
    this.userDetailsService.addUpdateUser(this.addOrEditUserDetail).subscribe(
      (data) => {
        this.userDetails = data.responseDto.userReqDto;
        this.setMatTable(this.userDetails);
        this.utilityService.openSnackbar(
          this.snackBar,
          data.responseDto.message,
          '',
          'green-snackbar'
        );
        this.sideNav.close();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  getFlatData(data, type) {
    if (type === 'array') {
      return data.map((data) => data.companyName);
    } else if (type === 'boolean') {
      return data ? 'Yes' : 'No';
    }
  }

  compareFn(a, b) {
    return a.CompanyCode == b.CompanyCode;
  }
}
