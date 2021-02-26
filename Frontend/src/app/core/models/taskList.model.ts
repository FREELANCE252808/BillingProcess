import { BaseModel } from './_base.model';

export class TaskListPostData {
	lstTask: any = {};
	TaskDesignation: TaskDesignation[];
	TaskWorkflowScheuleDates: TaskWorkflowScheuleDates[];
	TaskTypeCategoryID: string;
	ProjectID: string;
	NormSetID: string;
	TaskID: string;
	IsTasktypeMilestone: string;
	IsTaskEndDateEdited: string = "N";
	CalenderType: string;
	ProjectStartDate: string;
	PageSize: number;
	PageIndex: number;
}
export class TaskDesignation {
	DesignationID: number;
	Hours: number;
	TaskID: number;
	ProjectID: number;
	TaskTypeCategoryID: number;
}

export class TaskWorkflowScheuleDates {

	ProjectID: number;
	TaskID: number;
	TaskTypeID: number;
	ProjectWorkflowID: number;
	TaskWorkflowPlanDates: string;
	TaskTypeCategoryID: number;

}
export class TaskActivityLog { 
	ActivityLogID: number;
	TaskID: number;
	TaskName: string;
	FileName: string;
	WorkflowName: string;
	Action: string;
	ActionBy: string;
	ActionDate: Date;


}
