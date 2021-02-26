
import { BaseModel } from './_base.model';
export class projectDashboard extends BaseModel {
	id: number;
	CompanyID: number;
	ProjectName: string;
	ProjectCode: string;
	ProjectManager: string;
	ProjectManagerID: number;
	PriorityID: number;
	PriorityName: string
	ProjectLocation: string;
	StatusName: string;
	ProjectStatusID: number;
	ProjectDescription: string;
	ProjectStartDate: Date;
	ProjectEndDate: Date;

	ProjectTemplateID: number;
	ProjectBudget: number;
	CreatedBy: number;
	ModifiedBy: number;
	CreatedOn: Date;
	ModifiedOn: Date;
	CurrencyID: number;
	CurrencyCode: string;
	roadMap: any;
	clear() {
		this.id = undefined;
		this.ProjectName = "";
		this.ProjectCode = "";
		this.ProjectDescription = "";
		this.ProjectStatusID = 0;
		this.ProjectStartDate = new Date();
		this.ProjectEndDate = new Date();
		this.ProjectBudget = 0;
		this.ProjectTemplateID = 0;
		this.ProjectLocation = "";
		this.CurrencyID = 0;
		this.PriorityID = 0;
		this.roadMap = [];
	}
}




