import { BaseModel } from './_base.model';

export class StatusModel extends BaseModel {
	id: number;
	StatusName: string;



	clear() {
		this.StatusName = '';
		this.id = 0;

	}
}
