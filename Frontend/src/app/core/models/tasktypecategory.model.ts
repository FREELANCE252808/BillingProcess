import { BaseModel } from './_base.model';

export class TaskTypeCategorModel extends BaseModel {
	id: number;
	TaskTypeCategoryName: string;
	TaskTypeCategoryCode: string;



	clear() {
		this.TaskTypeCategoryName = '';
		this.TaskTypeCategoryCode = '';
		this.id = 0;

	}
}
