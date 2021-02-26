
import { BaseModel } from './_base.model';
export class ProjectModel extends BaseModel {
	id: number;
	ProjectName: string;
	ProjectCode: string;
	ProjectDescription: string;
	CalenderType: string;
	ProjectStatusID: number;
	ProjectManagerID: number;
	ProjectStartDate: string;
	ProjectEndDate: string;
	PriorityID: number;
	NormSetID: any;
	ProjectTemplateID: number;
	ProjectLocation: string;
	ProjectBudget: number;	
	ProjectCurrencyID: number;
	ProjectPriorityId: number;
	projectManagers: any;
	projectAdmins: any;
	CurrencyID: number;
	projectTeamMembers: any;
	ProjectAdmins: any;
	ProjectMembers: any;
	roadMap: any;
	lineMomentTransform: any;
	left: any;
	ModifiedOn: string;
	CreatedOn: string;

	ProjectsDepartmentID: number;
	ProjectID: number;
	DepartmentID: number;
	HoursData: any[];
	SubmissiondateData: any[];
	DepartmentName: string;
	Hours: any[];
	Submissiondate: any[];
	DATA: any[];
	ProjectTypeID: number;
	Capacity: string;
	AdditionalField: string;
	BufferPer: number;
	/////// client master   /////
	ClientID: number;
	ClientAssetID: number;
	ClientContractID: number;
	ClientFocalPointID: number;
	ProjectGroupID: number;
	ProjectStageID: number;
	ClientProjectNo: string;
	OriginalProjectID: number;
	ProjectLead: number;

	clear() {
		this.id = undefined;
		this.ProjectName = "";
		this.ProjectCode = "";
		this.ProjectDescription = "";
		this.CalenderType = "C";
		//this.ProjectStatusID = 0;
		this.ProjectStartDate = "";
		this.ProjectEndDate = "";
		this.ProjectBudget = 0;
		this.BufferPer = 0;
		//this.ProjectTemplateID = 0;
		this.ProjectLocation = "";
		//this.CurrencyID = 0;
		//this.PriorityID = 0;
		//this.ProjectManagerID = 0;
		///this.ProjectAdmins = [];
		//this.ProjectMembers = [];
		//this.ProjectCurrencyID = 0;
		//this.ProjectPriorityId = 0;
		this.roadMap = "";
		this.CreatedOn = "";
		this.ModifiedOn = "";
		this.lineMomentTransform = null;
		this.left = null;
		this.AdditionalField = "";
		this.ProjectsDepartmentID = 0;
		this.ProjectID = 0;
		this.DepartmentID = 0;
		this.DepartmentName = "";
		this.Capacity = "";
		this.ClientProjectNo = "";
	}
}




