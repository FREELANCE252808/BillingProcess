import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserDetails } from './models/UserDetails';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnChanges {

  @ViewChild('userDetailsSideNav') sideNav: MatSidenav;

  userDetails: UserDetails[] = [];
  dataSource = new MatTableDataSource<any>();
  tableData = [
    {header: 'Action', name: 'userId', class:'sm', sticky: true},
    {header: 'First Name', name: 'firstname', class:'sm', sticky: false},
    {header: 'Last Name', name: 'lastname', class:'sm', sticky: false},
    {header: 'User Name', name: 'userName', class:'sm', sticky: false},
    {header: 'Password', name: 'password', class:'sm', sticky: false},
    {header: 'Company', name: 'companyList', class:'sm', sticky: false},
    {header: 'Is Admin', name: 'isAdmin', class:'sm', sticky: false},
    {header: 'Is Active', name: 'isActive', class:'sm', sticky: false},
  ];
  displayedColumns = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.tableData.map(data=> data.name);
    this.userDetails = [{
      userId: 0,
      firstname: "Shreyash",
      lastname: "Atal",
      userName: "shreyash",
      password: "shreyash",
      company: [{companyId: '1', companyName: 'abc'}, {companyId: '2', companyName: 'bcd'}],
      companyList: ['abc', 'bcd'],
      isAdmin: true,
      isActive: true
    },{
      userId: 1,
      firstname: "Bipin",
      lastname: "Singh",
      userName: "Bipin",
      password: "Bipin",
      company: [{companyId: '1', companyName: 'abc'}, {companyId: '2', companyName: 'bcd'}],
      companyList: ['abc', 'bcd'],
      isAdmin: true,
      isActive: true
    }];
    this.setMatTable();
  }

  ngOnChanges(): void {
    this.setMatTable();
  }

  setMatTable(){
    setTimeout(()=>{
      this.dataSource.data = this.userDetails;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  addUser(): void{

  }

  editUserDetails(event): void {
    console.log(event)
  }

}
