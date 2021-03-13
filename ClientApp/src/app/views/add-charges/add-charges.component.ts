import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddCharges, KeyValue } from './models/AddCharges';

@Component({
  selector: 'app-add-charges',
  templateUrl: './add-charges.component.html',
  styleUrls: ['./add-charges.component.scss'],
})
export class AddChargesComponent implements OnInit, OnChanges {
  @ViewChild('addChargesSideNav') sideNav: MatSidenav;
  totalSum: number = 0;
  myFormValueChanges$;
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
      rowId: 1,
      date: '25-01-2021',
      case: { key: 1, value: 'T1112' },
      stage: { key: 1, value: 'FILING' },
      task: { key: 1, value: 'TIME' },
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
      date: '30-01-2021',
      case: { key: 1, value: 'T1112' },
      stage: { key: 2, value: 'TIME' },
      task: { key: 1, value: 'TIME' },
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

  optionalDropdownData: KeyValue[] = [
    { key: 1, value: 'File Type' },
    { key: 2, value: 'File Number' },
  ];

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
  // Additional Data Addition
  defaultAdditonalData = { type: { key: null, value: '' }, description: '' };
  // End of Additional Data
  billingChargesForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  TotAmt(col:string)
  {
    debugger;
    if(col="quantity")
      this.myFormValueChanges$ = this.billingChargesForm.controls['quantity'].valueChanges;

      if(col="rate")
      this.myFormValueChanges$ = this.billingChargesForm.controls['rate'].valueChanges;

      // subscribe to the stream so listen to changes on units
    this.myFormValueChanges$.subscribe(units =>
           this.updateTotalUnitPrice(units)
    );

  }
  private updateTotalUnitPrice(units: any) {
    debugger;
   // get our units group controll
   const newRate =this.billingChargesForm.controls['rate'].value;
   const NewQty =this.billingChargesForm.controls['quantity'].value;
   let totalUnitPrice = (newRate*NewQty);
   this.billingChargesForm.controls["totalBillingAmount"].setValue(totalUnitPrice, {onlySelf: true, emitEvent: false});

 }

  ngOnInit(): void {
    this.billingChargesForm = this.formBuilder.group({
      rowId: [0],
      date: [new Date()],
      case: [null, Validators.required],
      stage: [null, Validators.required],
      task: [null, Validators.required],
      resource: [null, Validators.required],
      description: [''],
      quantity: [1, Validators.required],
      uom: ['', Validators.required],
      rate: [1, Validators.required],
      totalBillingAmount:  [{value: '', disabled: true}],
      comments: ['', Validators.required],
      more: [false, Validators.required],
    });

debugger;
  // initialize stream on units
  //this.myFormValueChanges$ = this.billingChargesForm.controls['billingChargesForm'].valueChanges;



    this.setMatTable();
    /*
        console.log('quantity', this.billingChargesForm.get('quantity').value);
    console.log('rate', this.billingChargesForm.get('rate').value);
    const a = this.billingChargesForm.get('quantity').value;
    const b = this.billingChargesForm.get('rate').value;
    let c = a * b;
    console.log('c', c);
    this.billingChargesForm.get('totalBillingAmount').patchValue(a * b);
    console.log(
      'totalBillingAmount',
      this.billingChargesForm.get('totalBillingAmount').value
    );
    this.billingChargesForm
      .get('quantity')
      .valueChanges.subscribe((quantityChange) => {
        console.log('quantity', quantityChange);
        this.billingChargesForm
          .get('totalBillingAmount')
          .patchValue(quantityChange * b);
        console.log(
          'totalBillingAmount quantity',
          this.billingChargesForm.get('totalBillingAmount').value
        );
      });
    this.billingChargesForm.get('rate').valueChanges.subscribe((rateChange) => {
      console.log('rateChange', rateChange);
      this.billingChargesForm
        .get('totalBillingAmount')
        .patchValue(a * rateChange);
      console.log(
        'totalBillingAmount rateChange',
        this.billingChargesForm.get('totalBillingAmount').value
      );
    });

    */
  }

  ngOnChanges() {

    console.log('quantity', this.billingChargesForm.get('quantity').value);
    console.log('rate', this.billingChargesForm.get('rate').value);
    const a = this.billingChargesForm.get('quantity').value;
    const b = this.billingChargesForm.get('rate').value;
    this.billingChargesForm.get('totalBillingAmount').setValue(a * b);
    console.log(
      'totalBillingAmount',
      this.billingChargesForm.get('totalBillingAmount').value
    );
    this.billingChargesForm
      .get('quantity')
      .valueChanges.subscribe((quantityChange) => {
        console.log('quantity', quantityChange);
      });
    this.billingChargesForm.get('rate').valueChanges.subscribe((rateChange) => {
      console.log('rateChange', rateChange);
    });
  }
  get f() {
    return this.billingChargesForm.controls;
  }


/**
   * Update prices as soon as something changed on units group
   */





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
    this.billingChargesForm.patchValue(this.addOrEditCharges);
    console.log('this.billingChargesForm', this.billingChargesForm);
    this.sideNav.open();
  }

  addAdditionalData(data) {
    data.push(this.defaultAdditonalData);
  }

  updateBillDetails() {}
}
