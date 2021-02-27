import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  baseUrl = environment.API_URL;
  constructor(private http: HttpClient) { }

  getAllCompanies(){

  }

  addUpdateUser(data){
    return this.http.post(`${this.baseUrl}api/User/AddEditUser`, data)
  }
}
