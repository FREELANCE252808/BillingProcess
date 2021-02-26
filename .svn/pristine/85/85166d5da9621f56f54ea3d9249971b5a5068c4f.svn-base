import { BaseModel } from './_base.model';

export class TimeSheetModel extends BaseModel {
	TimeSheetWeekly: any[] = [];
	TimeSheetDeviations: any[] = [];
	UserTimeSheetWeeklyDetailssss: any[] = [];
	TimeSheetWeeklyDetailID: number;
	ProjectName: string;
	TaskName: string;
	TaskID: number;
	TaskProgress: number;
	TimeSheetWeeklyID: number;
	UserID: number;
	CompanyID: number;
	SunOTHrs: number;
	MonOT: number;
	TueOT: number;
	WedOT: number;
	ThuOT: number;
	FriOT: number;
	SatOT: number;

	SunNTHrs: number;
	MonNT: number;
	TueNT: number;
	WedNT: number;
	ThuNT: number;
	FriNT: number;
	SatNT: number;
	NorHrs: number;
	OTHrs: number;
	Remarks: string;

	SunDate: Date;
	MonDate: Date;
	TueDate: Date;
	WedDate: Date;
	ThuDate: Date;
	FriDate: Date;
	SatDate: Date;

	WeekStart_ID_1: number;
	WeekStart_ID_2: number;
	WeekStart_ID_3: number;
	WeekStart_ID_4: number;
	WeekStart_ID_5: number;
	WeekStart_ID_6: number;
	WeekStart_ID_7: number;

	ConsumedHrs: number;
	StartDate: Date;
	EndDate: Date;
	ActualEndDate: Date;
	AvailableHours: number;
	OtHours: number;
	hours: number;
	WeeklyWorkingHours: number;
	WeekStartDate: string;
	WeekEndDate: string;
	FinalStatusID: number;
	ActualStartDate: Date;

	clear() {
		this.FinalStatusID = 0;
		this.ActualStartDate = new Date();
		this.TimeSheetWeeklyID = 0;
		this.WeekStartDate = "";
		this.WeekEndDate = "";
		this.hours = 0;
		this.AvailableHours = 0;
		this.OtHours = 0;
		this.ActualEndDate = new Date();
		this.StartDate = new Date();
		this.EndDate = new Date();
		this.TaskID = 0;
		this.ProjectName = "";
		this.TaskName = "";
		this.TaskProgress = 0;
		this.WeeklyWorkingHours = 0;
		this.TimeSheetWeeklyDetailID = 0;
		this.ConsumedHrs = 0;
		this.Remarks = "";
		this.UserID = 0;
		this.CompanyID = 0;
		this.SunOTHrs = 0;
		this.MonOT = 0;
		this.TueOT = 0;
		this.WedOT = 0;
		this.ThuOT = 0;
		this.FriOT = 0;
		this.SatOT = 0;

		this.SunNTHrs = 0;
		this.MonNT = 0;
		this.TueNT = 0;
		this.WedNT = 0;
		this.ThuNT = 0;
		this.FriNT = 0;
		this.SatNT = 0;
		this.NorHrs = 0;
		this.OTHrs = 0;
		this.Remarks = "";

		this.SunDate = new Date();
		this.MonDate = new Date();
		this.TueDate = new Date();
		this.WedDate = new Date();
		this.ThuDate = new Date();
		this.FriDate = new Date();
		this.SatDate = new Date();


	}
}

export class TimesheetPostModel {

	UserTimeSheetWeekly: UserTimeSheetWeekly[];

	UserTimeSheetWeeklyDetailssss: UserTimeSheetWeeklyDetail[];


}

export class UserTimeSheetWeekly {
	TimeSheetWeeklyID: string;
	TimeSheetFromDate: string;
	TimeSheetToDate: string;
	ColumnTitle: string;
	FinalStatus: string;
	CompanyID: string;
	clear() {
		this.CompanyID = "";
		this.FinalStatus = "";
		this.ColumnTitle = "";
		this.TimeSheetWeeklyID = "";
		this.TimeSheetFromDate = "";
		this.TimeSheetToDate = "";
	}

}



export class UserTimeSheetWeeklyDetail {
	TimeSheetWeeklyDetailID: string;
	TaskID: string;
	TimeSheetWeeklyID: string;
	IsNewActivity: string;
	UserID: string;
	TimesheetDate: string;
	NorHrs: string;
	OTHrs: string;
	LeaveHrs: string;
	CompanyID: string;

	clear() {
		this.CompanyID = "";
		this.IsNewActivity = "";
		this.LeaveHrs = "";
		this.NorHrs = "";
		this.OTHrs = "";
		this.TimesheetDate = "";
		this.TimeSheetWeeklyDetailID = "";
		this.TimeSheetWeeklyID = "";
		this.UserID = "";
		this.TaskID = "";
	}

}
export class AddTaskUpdateTaskProgress {
	TaskID: number;

	TimeSheetWeeklyID: number;
	UserID: number;
	companyID: number;
	TimeSheetWeeklyDetailID: number;
	StartDate: Date;
	ActualStartDate: Date;
	EndDate: Date;
	ActualEndDate: Date;
	TaskProgress: number;
	updateTask: string;

	clear() {
		this.TaskID = 0;
		this.updateTask = '';
		this.TimeSheetWeeklyID = 0;
		this.UserID = 0;
		this.companyID = 0;;
		this.TimeSheetWeeklyDetailID = 0;
		this.StartDate=new Date();
		this.ActualStartDate = new Date();
		this.EndDate = new Date();
		this.ActualEndDate = new Date();
		this.TaskProgress =0;
	}
}
