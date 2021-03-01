import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  UserDetails } from '../models/UserDetails';
import { UserDetailsComponent } from '../user-details.component';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  baseUrl = environment.API_URL;
  constructor(private http: HttpClient) {
   }

  getAllCompanies(){
    return this.http.get(`${this.baseUrl}api/User/GetCompanyList`)
  }

  GetAllUsers(){
    return this.http.get(`${this.baseUrl}api/User/GetAllUsers`)
  }

  addUpdateUser(userData:any){
    return this.http.post<any>(`${this.baseUrl}api/User/AddEditUser`, userData)
  }


}
