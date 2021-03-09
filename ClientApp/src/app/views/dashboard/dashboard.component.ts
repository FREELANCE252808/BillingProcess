import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
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
import { pull, union } from 'lodash';
import { CustomdialogComponent } from 'src/app/components/customdialog/customdialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnChanges {
  @ViewChild('dashboardSideNav') sideNav: MatSidenav;
  /* userDetails: UserDetails[] = []; */
  addOrEditUserDetail: UserDetails;
  editBillingDetails: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns = [
    'action',
    'edit',
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
  ];
  //  'more',
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Form Fields
  listOfCompanies = [];
  listOfbillingDropDown = [
    { key: 1, value: 'ARBILL0001' },
    { key: 2, value: 'ARBILL0002' },
  ];
  registerForm: FormGroup;
  submitted = false;
  listOfCustomers = [];
  listofCases = [];
  listOfStages = [];
  listOfTasks = [];

  optionalDropdownData = [
    { key: 1, value: 'File Type' },
    { key: 2, value: 'File Number' },
  ];

  displayData;
  billingData1 = {
    description: 'Case Billing Data for Worksheet January 2021',
    date: '30-01-2021',
    currency: 'GBP',
    wipAmount: 500,
    selectedAmount: 500,
    worksheetAmount: 500,
    gridData: [
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
        additionalData: [
          { type: { key: 1, value: 'File Type' }, description: 'test' },
        ],
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
    ],
  };
  billingData2 = {
    description: 'Case Billing Worksheet March 2021',
    date: '15-03-2021',
    currency: 'GBP',
    wipAmount: 1000,
    selectedAmount: 1000,
    worksheetAmount: 1000,
    gridData: [
      {
        rowId: 3,
        serialNumber: 3,
        customerId: 3,
        customer: 'A3334',
        caseId: 3,
        case: 'T3333',
        stageId: 3,
        stage: 'FILING',
        taskId: 3,
        task: 'Task',
        resourceId: 3,
        resource: 33333,
        description: 'Joe Bloggs',
        quantity: 8.0,
        uom: 'HRS',
        rate: 300.0,
        totalBillingAmount: 3600.0,
        comments: 'Billing',
        more: true,
        additionalData: [
          { type: { key: 1, value: 'File Type' }, description: 'test' },
        ],
      },
      {
        rowId: 4,
        serialNumber: 4,
        customerId: 1,
        customer: 'A1334',
        caseId: 1,
        case: 'T1113',
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
    ],
  };
  gridData = [];
  // End of Form Fields

  // Readonly fields at top
  selectedBillId;

  dataForSelectedBill: {
    description: '';
    date: null;
    wipAmount: null;
    selectedAmount: null;
    worksheetAmount: null;
  };
  selection = new SelectionModel<any>(true, []);
  // Data for Post
  selectedDataForPost = [];
  // End for Data for Post

  //Show and Hide panel variables
  isGenerateBillDetails = false;
  isEditableRow = false;
  //End Show and Hide panel variables

  // Additional Data Addition
  defaultAdditonalData = { type: { key: null, value: '' }, description: '' };
  // End of Additional Data

  constructor(
    private dialog: MatDialog,
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
    this.isGenerateBillDetails = true;
    this.isEditableRow = false;
    this.sideNav.open();
  }

  editUserDetails(event): void {
    this.isGenerateBillDetails = false;
    this.isEditableRow = true;
    this.sideNav.open();
  }

  submitUserDetails(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    /* this.userDetailsService.addUpdateUser(this.registerForm.value).subscribe(
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
    ); */
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
  compareOptionalFn(a, b) {
    return a.key == b.key;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));

    this.selectedDataForPost = this.isAllSelected()
      ? this.dataSource.data.map((request) => request.rowId)
      : [];
    this.selectedDataForPost = union(this.selectedDataForPost);
    console.log('union this.selectedDataForPost', this.selectedDataForPost);
  }

  selectedData(event, row) {
    if (event) {
      this.selection.toggle(row);
    } else {
      return null;
    }

    if (event.checked) {
      this.selectedDataForPost.push(row.rowId);
    } else {
      pull(this.selectedDataForPost, row.rowId);
    }
  }

  editBillDetails(data): void {
    console.log('edit', data);
    this.editBillingDetails = data;
    this.isEditableRow = true;
    this.isGenerateBillDetails = false;
    this.sideNav.open();
  }

  addAdditionalData(data) {
    data.push(this.defaultAdditonalData);
  }

  updateBillDetails() {
    console.log('edit', this.editBillingDetails);
  }

  changeBillingData() {
    if (this.selectedBillId === 1) {
      this.displayData = this.billingData1;
      this.gridData = this.billingData1.gridData;
    } else {
      this.displayData = this.billingData2;
      this.gridData = this.billingData2.gridData;
    }
    this.setMatTable();
  }

  openPopUpType(type) {
    switch (type) {
      case 'delete':
        this.openDialog(
          'Delete  Billing Worksheet',
          'Confirm you want to delete this worksheet?',
          'delete'
        );
        break;

      case 'post':
        this.openDialog(
          'Post Billing Worksheet',
          'Confirm you want to post this worksheet?',
          'post'
        );
        break;
      case 'close':
        this.openDialog(
          'Close?',
          'Confirm you want to Close (Unsaved Changes will be lost)?',
          'close'
        );
        break;
    }
  }

  openDialog(titleDisplay, messageDisplay, actionType): void {
    const dialogRef = this.dialog.open(CustomdialogComponent, {
      width: '350px',
      data: {
        title: titleDisplay,
        message: messageDisplay,
        action: actionType,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('result', result);
      if (result == 'delete') {
        console.log('call delete api');
      } else if (result == 'post') {
        console.log('call post api');
      } else if (result == 'close') {
        this.accountService.logout();
      }
    });
  }
}
