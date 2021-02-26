import { BaseModel } from './_base.model';

export class ExternalUserModel extends BaseModel {
	  
	ExUser: string;
	Name: string;
	CompanyName: string;
	PhoneNo: string;
	Location: string;
	Designation: string;
	Role: string;
	ExUserID: number;
	
	
	clear() {
		this.ExUser = '';
		this.Name = '';
		this.CompanyName = '';
		this.PhoneNo = '';
		this.Location = '';
		this.Designation = '';
		this.Role = '';
		this.ExUserID = 0;
		
		
	}
}
