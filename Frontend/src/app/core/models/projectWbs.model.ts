import { BaseModel } from './_base.model';

export class ProjectWbsModel {
	WBSName: string;
	WbsCode: string;
	ParentWBSName: string;
	WBSID: number;
	ParentWBSID: number;
	ProjectID: number;
	ParentCode: string;
	CompanyID: number;
	clear() {
		this.ParentWBSID = 0;
		this.ParentWBSName = "";
		this.WbsCode = "";
		this.WBSID = 0;
		this.WBSName = "";
		this.ProjectID = 0;
		this.CompanyID = 0;
		this.ParentCode = "";
	}
}
