import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomdialogComponent } from 'src/app/components/customdialog/customdialog.component';
import { UtilityService } from 'src/app/services/utility.service';
import { KeyValue } from '../add-charges/models/AddCharges';
import { AccountService } from '../login/services/account.service';
import { MoveCharges } from './models/MoveCharges';

@Component({
  selector: 'app-move-charges',
  templateUrl: './move-charges.component.html',
  styleUrls: ['./move-charges.component.scss'],
})
export class MoveChargesComponent implements OnInit {
  addRow: MoveCharges;
  editBillingDetails: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns = [
    'case',
    'task',
    'charge',
    'resource',
    'document',
    'quantity',
    'cost',
  ];
  //  'more',
  gridDetails = [
    {
      rowId: 1,
      case: { key: 1, value: 'T1112' },
      charge: { key: 1, value: 'FILING' },
      task: { key: 1, value: 'TIME' },
      resource: 32111,
      document: 'Joe Bloggs',
      quantity: 8.0,
      cost: 200.0,
    },
    {
      rowId: 2,
      date: '30-01-2021',
      case: { key: 1, value: 'T1112' },
      charge: { key: 1, value: 'FILING' },
      task: { key: 1, value: 'TIME' },
      resource: 32111,
      document: 'Trademark License',
      quantity: 1.0,
      cost: 2000.0,
    },
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  listofCases: KeyValue[] = [
    { key: 1, value: 'T1112' },
    { key: 2, value: 'T11113' },
  ];

  listOfTasks: KeyValue[] = [{ key: 1, value: 'TIME' }];

  listOfUOM = ['HRS', 'MIN', 'SEC'];

  listOfStages: KeyValue[] = [
    { key: 1, value: 'Stage11112' },
    { key: 2, value: 'Stage11113' },
  ];
  listOfResources: KeyValue[] = [
    { key: 1, value: '321111' },
    { key: 2, value: '321112' },
  ];

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private accountService: AccountService,
    private utilityService: UtilityService
  ) {}

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

  getTotalCost() {
    return this.gridDetails
      .map((t) => t.cost)
      .reduce((acc, value) => acc + value, 0);
  }

  getTotalQuantity() {
    return this.gridDetails
      .map((t) => t.quantity)
      .reduce((acc, value) => acc + value, 0);
  }

  getDocument(row) {
    console.log('row', row);
  }

  addRowMethod() {
    this.addRow = new MoveCharges();
    this.gridDetails.push(new MoveCharges());
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
        let cost = this.getTotalCost();
        let quantity = this.getTotalQuantity();
        if (cost === 0 && quantity === 0) {
          this.openDialog(
            'Post Move Charges Worksheet',
            'Confirm you want to post this worksheet?',
            'post'
          );
        } else {
          this.utilityService.openSnackbar(
            this.snackBar,
            'Balance for Cost and Quantity should be 0 to continue.',
            '',
            'red-snackbar'
          );
          return;
        }

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
