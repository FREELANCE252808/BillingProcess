import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UtilityService } from 'src/app/services/utility.service';
import { AccountService } from '../login/services/account.service';
import { TokenStorage } from '../login/services/token-storage.service';
import { UserDetails } from '../user-details/models/UserDetails';
import { UserDetailsService } from '../user-details/services/user-details.service';
import { GenerateBill } from './models/GenerateBill';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnChanges {
  @ViewChild('dashboardSideNav') sideNav: MatSidenav;
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
  /* displayedColumns = ['action', 'rowId']; */
  displayedColumns = [
    'action',
    'rowId',
    'customerName',
    'case',
    'stage',
    'task',
    'resource',
    'description',
    'quantity',
    'uom',
    'rate',
    'totalBillingAmount',
    'comments',
    'more',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Form Fields
  listOfCompanies = [];
  registerForm: FormGroup;
  submitted = false;
  listOfCustomers = [];
  listofCases = [];
  listOfStages = [];
  listOfTasks = [];
  gridData = [
    {
      rowId: 1,
      serialNumber: 1,
      customerId: 1,
      customer: 'A1234',
      caseId: 1,
      case: 'T1112',
      stageId: 1,
      stage: 'FILING',
      taskId: 1,
      task: 'TIME',
      resourceId: 1,
      resource: 32111,
      description: 'Joe Bloggs',
      quantity: 8.0,
      uom: 'HRS',
      rate: 200.0,
      totalBillingAmount: 1600.0,
      comments: 'Time Spent On Filing',
      more: true,
      additionalData: [],
    },
    {
      rowId: 2,
      serialNumber: 2,
      customerId: 1,
      customer: 'A1234',
      caseId: 1,
      case: 'T1112',
      stageId: 1,
      stage: 'TITLE',
      taskId: 1,
      task: 'TIME',
      resourceId: 1,
      resource: 32111,
      description: 'Trademark License',
      quantity: 1.0,
      uom: 'HRS',
      rate: 2000.0,
      totalBillingAmount: 2000.0,
      comments: 'License Renewal',
      more: true,
      additionalData: [],
    },
  ];
  // End of Form Fields

  // Readonly fields at top
  selectedBillId;
  billsDropDown = [];
  dataForSelectedBill: {
    description: '';
    date: null;
    wipAmount: null;
    selectedAmount: null;
    worksheetAmount: null;
  };
  // End of Readonly fields at top
  constructor(
    private formBuilder: FormBuilder,
    private utilityService: UtilityService,
    private snackBar: MatSnackBar,
    private tokenStorage: TokenStorage,
    private accountService: AccountService,
    private userDetailsService: UserDetailsService
  ) {
    // API for all dropdowns
    // { cases: [{key:1, value: 124 },{key:1, value: 124 },{key:1, value: 124 }], tasks: [{key:1, value: 124 },{key:1, value: 124 },{key:1, value: 124 }]}
    /* this.userDetailsService.getAllCompanies().subscribe((data: any) => {
      this.listOfCompanies = JSON.parse(data.responseDto).ConpanyList;
    }); */
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      billId: [0],
      cutOffDate: [null, Validators.required],
      documentDate: [null, Validators.required],
      description: ['', Validators.required],
      customer: [[]],
      cases: [[]],
      stages: [[]],
      tasks: [[]],
    });
    // this.displayedColumns = this.tableData.map((data) => data.name);
    this.setMatTable();
  }

  ngOnChanges(): void {
    this.setMatTable();
  }

  get f() {
    return this.registerForm.controls;
  }

  setMatTable() {
    setTimeout(() => {
      this.dataSource.data = this.gridData;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  generateBill(): void {
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
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.userDetailsService.addUpdateUser(this.registerForm.value).subscribe(
      (data) => {
        this.userDetails = data.responseDto.userReqDto;
        this.setMatTable();
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
