import { BaseModel } from './_base.model';

export class ProjectRemarkModel extends BaseModel {
	id: number;
	carId: number;
	text: string;
	type: number; // Info, Note, Reminder
	dueDate: string;

	// Refs
	_carName: string;

	clear(carId: number) {
		this.id = undefined;
		this.carId = carId;
		this.text = '';
		this.type = 0;
		this.dueDate = '';
	}
}