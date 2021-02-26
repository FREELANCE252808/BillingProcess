import { BaseModel } from './_base.model';

export class ActualActivityModel extends BaseModel {
	ActualActivityID: number;
	ActualActivityName: string;
	ActualActivityCode: string;
	

	clear() {
		this.ActualActivityName = '';
		this.ActualActivityCode = '';
		
	}
}
