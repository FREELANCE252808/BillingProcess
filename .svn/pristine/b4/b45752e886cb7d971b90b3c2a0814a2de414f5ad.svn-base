import { BaseModel } from "./_base.model";

export class TimesheetReport extends BaseModel {
	ProjectID: number;
	DepartmentID: number
	ToDate: Date;
	SubmittedDate: Date;
	month: any;
	year: number;
	ClientProjectNo: string;
	AssetID: number;
	ContractID: number;
	ProjectLead: number;
	UserID: number;
	clear() {
		this.ProjectLead = 0;
		this.ClientProjectNo = "";
		this.ProjectID = 0;
		this.DepartmentID = 0;
		this.ContractID = 0;
		this.year = 0;
		this.ToDate = new Date();
		this.SubmittedDate = new Date();
	}
}
