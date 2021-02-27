import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserDetails } from './models/UserDetails';
import { UserDetailsService } from './services/user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnChanges {

  @ViewChild('userDetailsSideNav') sideNav: MatSidenav;

  userDetails: UserDetails[] = [];
  addOrEditUserDetail: UserDetails;
  dataSource = new MatTableDataSource<any>();
  tableData = [
    {header: 'Action', name: 'userId', class:'sm', type: 'string',sticky: true},
    {header: 'First Name', name: 'firstName', class:'sm', type: 'string',sticky: false},
    {header: 'Last Name', name: 'lastName', class:'sm', type: 'string',sticky: false},
    {header: 'User Name', name: 'userName', class:'sm', type: 'string',sticky: false},
    {header: 'Password', name: 'password', class:'sm', type: 'string',sticky: false},
    {header: 'Company', name: 'userCompanyList', class:'sm', type: 'array',sticky: false},
    {header: 'Is Admin', name: 'isAdmin', class:'sm', type: 'string',sticky: false},
    {header: 'Is Active', name: 'isActive', class:'sm', type: 'string',sticky: false},
  ];
  displayedColumns = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  listOfCompanies = [];
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userDetailsService: UserDetailsService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userId: [0],
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      isAdmin: [false],
      isActive: [true],
      userCompanyList:[[]]
      // userCompanyList: this.formBuilder.array([])
      // userCompanyList: this.formBuilder.array([], Validators.required)
    });
    this.displayedColumns = this.tableData.map(data=> data.name);
    this.userDetails = [{
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
    }];
    this.setMatTable();
  }

  ngOnChanges(): void {
    this.setMatTable();
  }

  get f() { return this.registerForm.controls; }


  setMatTable(){
    setTimeout(()=>{
      this.dataSource.data = this.userDetails;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  addUser(): void{
    this.addOrEditUserDetail = new UserDetails()
    console.log('addition this.addOrEditUserDetail', this.addOrEditUserDetail)
    this.sideNav.open();
  }

  editUserDetails(event): void {
    console.log(event);
    this.addOrEditUserDetail = this.userDetails.filter(data=> data.userId)[0];
    console.log('this.addOrEditUserDetail', this.addOrEditUserDetail);
    this.registerForm.patchValue(this.addOrEditUserDetail);
    this.sideNav.open();
  }

  submitUserDetails(): void{
    this.submitted = true;
    console.log("this.registerForm", this.registerForm.value)
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.userDetailsService.addUpdateUser(this.registerForm.value).subscribe(data=>{
          this.sideNav.close();
        }, error=> {
          console.error(error)
        })


  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  getFlatData(data){
    return data.map(data=> data.companyName);
  }

}
