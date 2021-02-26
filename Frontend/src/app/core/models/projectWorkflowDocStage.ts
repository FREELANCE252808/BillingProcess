import { BaseModel } from './_base.model';

export class ProjectWorkflowDocStage extends BaseModel {
	ProjectWorkflowDocStageID: number;
	ProjectID: number;
	ProjectWorkflowDetailID: number;
	DocStageID: number;
	CompanyID: number;
	DocStage: string;
	PercentageWeightage: number;	
}
