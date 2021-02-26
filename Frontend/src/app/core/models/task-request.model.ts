import { BaseModel } from './_base.model';

export class TaskRequest {
	RowNumber: number;
	Task: string;
	TaskStatus: string;
	TaskTypeID: number;
	TaskOwnerName: number;
	TaskOwner: number;//task ownerID
	TaskID: number;
	TaskNo: number;
	TaskFocalPoint: number;//nullable
	TaskName: string;
	TaskType: number;
	TaskProgress: number;
	TaskStatusName: string;
	NormTypeName: string;
	DepartmentName: string;
	DepartmentID: number;
	StartDate: Date;
	EndDate: Date;
	PriorityName: string;
	Hours: number;
	AssignOwnerID: number;
	ProjectID: number;
	PageSize: number;
	Remarks: string;
	IsFocalPoint: string;
	IsProjectManager: string;
	subTaskExist: string;
	Priority: number; //nullable
	DesignationID: number;
	ParentTaskID: number;
	DesignationName: string;
	CntProgressSheet: number;
	CntFileUpload: number;//nullable
	TaskBookHrs: number;
	RecordCount: number;
	ParentTaskId: number;
	balHrs: number;
	GroupTask: string;
	ActualEndate: Date;


	clear() {
		this.ActualEndate = new Date(),
		this.ParentTaskId=0
		this.RecordCount=0,
		this.RowNumber = 0,
		this.Task = "",
			this.DepartmentName = "",

			this.IsProjectManager = "",
			this.NormTypeName = "",
			this.IsFocalPoint="",
		this.TaskStatus = "",
		this.StartDate = new Date(),
		this.EndDate = new Date(),
		this.TaskTypeID = 0,
			this.TaskType = 0,
		this.PriorityName = "",
		this.Hours = 0;
		this.TaskOwner = 0;
		this.AssignOwnerID = 0,
		this.ProjectID = 0,
		this.PageSize = 5;
		this.DepartmentID = 0,
		this.DepartmentName = "",
		this.Remarks = "",
		this.TaskID = 0,
		this.subTaskExist="",
		this.TaskNo =0,
		this.TaskFocalPoint= 0,//nullable
		this.TaskName = "",
		this.Priority=0, //nullable
		this.DesignationID =0,
		this.TaskProgress=0,
		this.ParentTaskID=0,
		this.DesignationName="",
		this.CntProgressSheet=0,
		this.CntFileUpload=0,//nullable
			this.TaskStatusName = "",
			this.TaskBookHrs=0
		
	}
}
export class AssignBulkTaskModel {
	ProjectID: number;
	UserId: number;
	taskID: number[];
	ActualEndate: Date;
	TaskNo: string;
	TaskName: string;
	
	clear() {
		this.ProjectID = 0;
		this.TaskNo = "";
		this.TaskName = "";
		this.taskID = [];
		this.UserId = 0;
		this.ActualEndate = new Date();
	}

}
