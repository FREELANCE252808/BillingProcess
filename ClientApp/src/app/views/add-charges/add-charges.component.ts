import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddCharges } from './models/AddCharges';

@Component({
  selector: 'app-add-charges',
  templateUrl: './add-charges.component.html',
  styleUrls: ['./add-charges.component.scss'],
})
export class AddChargesComponent implements OnInit {
  @ViewChild('addChargesSideNav') sideNav: MatSidenav;
  /* userDetails: UserDetails[] = []; */
  addOrEditCharges: AddCharges;
  editBillingDetails: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns = [
    'action',
    'rowId',
    'date',
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
  //  'more',
  gridDetails = [
    {
      serialNumber: 1,
      date: '25-01-2021',
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
      serialNumber: 2,
      date: '30-01-2021',
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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  optionalDropdownData = [
    { key: 1, value: 'File Type' },
    { key: 2, value: 'File Number' },
  ];
  // Additional Data Addition
  defaultAdditonalData = { type: { key: null, value: '' }, description: '' };
  // End of Additional Data
  constructor() {}

  ngOnInit(): void {
    this.setMatTable();
  }

  setMatTable() {
    setTimeout(() => {
      this.dataSource.data = this.gridDetails;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  compareOptionalFn(a, b) {
    return a.key == b.key;
  }
  addEditCharges(data) {
    if (!data) {
      this.addOrEditCharges = new AddCharges();
    } else {
      this.addOrEditCharges = data;
    }
    this.sideNav.open();
  }

  addAdditionalData(data) {
    data.push(this.defaultAdditonalData);
  }

  updateBillDetails() {}
}
