import { BaseModel } from './_base.model';

export class ProfileModel extends BaseModel {
	//export class RoleModel  {
	id: number;
	ProfileName: string;
	ProfileCode: string;

	clear() {
		this.ProfileName = '';
		this.ProfileCode = '';
		//this.id = 0;
		
	}
}
