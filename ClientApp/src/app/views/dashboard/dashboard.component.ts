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
  optionalDropdownData = [
    { key: 1, value: 'File Type' },
    { key: 2, value: 'File Number' },
  ];
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
}
