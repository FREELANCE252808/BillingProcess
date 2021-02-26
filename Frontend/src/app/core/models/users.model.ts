import { RoleModel } from './role.model';
import { BaseModel } from './_base.model';

export class UsersModel extends BaseModel {
	userID: number;
	imagePath: string;
	firstName: string;
	lastName: string;
	emailId: string;
	mobileNo: number;
	status: string;
	id: number;
	roleId: any[];
	userRoles:RoleModel[]

	clear() {
		this.imagePath = '/assets/images/userProfile/profile-user.jpg';
		this.firstName = '';
		this.lastName = '';
		this.emailId = '';
		this.roleId = [];
		this.status = 'A';
		this.userRoles = [];

	}
}
