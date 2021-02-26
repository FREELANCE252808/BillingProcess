
import { BaseModel } from './_base.model';
export class CompanyReportModel extends BaseModel {
	
	ProjectId: number;
	CompanyID: number;
	 
	
	clear() {
		this.ProjectId = 0;
		this.CompanyID = 0;
	
	}
} 


