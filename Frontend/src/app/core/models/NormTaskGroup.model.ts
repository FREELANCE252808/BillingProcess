import { BaseModel } from './_base.model';

export class NormTaskGroupModel extends BaseModel {
	GroupID: number;
	TaskGroupCode: string;
	TaskgroupName: string;
	DepartmentCode: string;
	StageCode: string;
	DepartmentID: number;
	StageID: number;
	ClientID: number;
	

	clear() {
		this.TaskGroupCode = '';
		this.TaskgroupName = '';
		this.DepartmentCode = '';
		this.StageCode = '';
	}
}

