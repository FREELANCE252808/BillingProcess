import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  baseUrl = environment.API_URL;
  constructor(private http: HttpClient) {
   }

  updatePassword(changePassword:any){
    return this.http.post(`${this.baseUrl}api/User/changePassword`,changePassword)
  }


}
