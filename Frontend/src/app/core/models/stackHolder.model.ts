import { BaseModel } from './_base.model';

export class StackHolderModel extends BaseModel {
	id: number;
	UserName: string;
	

	clear() {
		this.UserName = '';
		
	}
}
