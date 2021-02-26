import { BaseModel } from './_base.model';

export class RoleModel extends BaseModel {
	//export class RoleModel  {
	id: number;
	roleName: string;
	isDefault: string;
	companyID: number;

	clear() {
		this.roleName = '';
		this.id = 0;
		this.isDefault = "";
		this.companyID = 0;
	}
}
