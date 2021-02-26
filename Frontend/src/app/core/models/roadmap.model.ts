import { BaseModel } from './_base.model';

export class RoadMapModel extends BaseModel {
	//export class RoleModel  {
	TaskID: number;
	ProjectID: string;
	TaskName: string;
	StartDate: string;
	ActualStartDate: string;
	EndDate: string;
	ActualEndDate: string;
	Delay: string;
	TaskTypeID: string;
	TaskProgress: string;
	ColorFlag: string;
	UploadFileCount: string;



	

	clear() {
		this.TaskID = 0;
		this.ProjectID = '';
		this.TaskName = '';
		this.StartDate = '';
		this.ActualStartDate = '';
		this.EndDate = '';
		this.ActualEndDate = '';
		this.Delay = '';
		this.TaskTypeID = '';
		this.TaskProgress = '';
		this.ColorFlag = '';
		this.UploadFileCount = '';
		
	}
}
