import { BaseModel } from './_base.model';

export class OverTimeEntryModel extends BaseModel {
	OverTimeRequestID: number;
	FromDate: Date;
	ToDate: Date;
	ProjectID: number;
	UserID: number;
	ProjectCode: string;
	TaskID: number;
	OtHours: number;
	Hours: number;
	OTStatus: string;
	OtJustification: string;



	clear() {
		//this.TaskName////// = "";
		this.ProjectCode = "";
		this.ProjectID = 0;
		//this.Hours = "";
		//this.UserID = 0;
		//this.TaskID = 0;
		this.OtHours = 0;
		this.Hours = 0;
		this.OTStatus = "";
		this.OtJustification ="";
		
		
	}
}
