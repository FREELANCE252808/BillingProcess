import { BaseModel } from './_base.model';

export class ReprotingToModel extends BaseModel {
	//export class RoleModel  {
	id: number;
	FirstName: string;
	LastName: string;

	clear() {
		this.FirstName = '';
		this.LastName = '';
		this.id = 0;
		
	}
}
