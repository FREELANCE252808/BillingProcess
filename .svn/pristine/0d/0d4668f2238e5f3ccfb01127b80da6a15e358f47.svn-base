import { BaseModel } from './_base.model';

export class ProjectWorkflowModel extends BaseModel {

	ProjectWorkflowID: number;
	ProjectWorkflowDetailID: number;
	ProjectID: number;
	WorkflowCode: string;
	Workflow: string;
	Weightage: number;
	Remarks: string;
	TaskTypeCategoryID: number;
	TaskTypeID: number;
	RevisionWorkflowID: number;
	CompanyID: number;
}


export class ProjectWorkflowDetailModel extends BaseModel {

	ProjectWorkflowID: number;
	ProjectWorkflowDetailID: number;
	ProjectID: number;
	Weightage: number;
	Remarks: string;
	TaskTypeID: number;
	TaskTypeName: number;
	CompanyID: number;
}

/**
* File node data with nested structure.
* Each node has a filename, and a type or a list of children.
*/
export class FileNode {
	children: FileNode[];
	filename: string;
	type: any;
	Level: number;
	Id: number;

	TaskTypeCategoryID: number;
	ProjectWorkflowID: number;
	Workflow: string;
	WorkflowCode: string;	

	ProjectWorkflowDetailID: number;
	TaskTypeID: number;
	TaskTypeName: string;
	Weightage: number;
	lstWorkflowDetail: any[];
	TaskProgressOn: string;

	ProjectWorkflowDocStageID: number;
	DocStage: string;
	DocStageID: number;
	PercentageWeightage: number;
	lstDocStage: any[];

	CompanyID: number;
	ProjectID: number;
	Remarks: string;
}

/** Flat node with expandable and level information */
export class FileFlatNode {
	constructor(
		public expandable: boolean, public filename: string, public level: number, public type: any, public lstWorkflowDetail: any[], public lstDocStage: any[],
		public ProjectWorkflowID: number, public Workflow: string, public WorkflowCode: string, public Remarks: string, public ProjectWorkflowDetailID: number, public ProjectWorkflowDocStageID: number, public Id: number,
		public TaskTypeID: number, TaskTypeName: string, TaskProgressOn: string) {
	}

}
