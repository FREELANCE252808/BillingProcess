import { BaseModel } from './_base.model';

export class CompanyCalendarModel extends BaseModel {
	id: number;
	WorkingDate: string;
	Day: string;
	day_type_code: string;
	Remark: string;
	WorkingHrs: string;
	WorkingHrsType: string;
	Orderday: number;
	IsHoliday: string;
	start: Date;
	startDate: string;
	endDate: string;
	end: Date;
	title: string;
	HolidayTypeID: number;
	HolidayTypeName: string;
	HolidayTypeCode: string;
	HolidayCalendarID: number;
	ProjectID: number;
	sundayCheck: boolean;
	sundayText_OT: string;
	sundayText_NT: string;
	MondayCheck: boolean;
	MondayText_NT: string;
	MondayText_OT: string;
	TuesdayCheck: boolean;
	TuesdayText_NT: string;
	TuesdayText_OT: string;
	WednesdayCheck: boolean;
	WednesdayText_NT: string;
	WednesdayText_OT: string;
	ThursdayCheck: boolean;
	ThursdayText_NT: string;
	ThursdayText_OT: string;
	FridayCheck: boolean;
	FridayText_NT: string;
	FridayText_OT: string;
	SaturdayCheck: boolean;
	SaturdayText_OT: string;
	SaturdayText_NT: string;

	sundayText: string;
	MondayText: string;
	TuesdayText: string;
	WednesdayText: string;
	ThursdayText: string;
	FridayText: string;
	SaturdayText: string;

	

	clear() {


		this.sundayText='';
		this.MondayText = '';
		this.TuesdayText = '';
		this.WednesdayText = '';
		this.ThursdayText = '';
		this.FridayText = '';
		this.SaturdayText = '';
		this.Orderday = 0;
		this.IsHoliday = "";
		this.WorkingDate = '';
		this.Day = '';
		this.day_type_code = '';
		this.Remark = '';
		this.start = new Date();
		this.startDate = '';
		this.endDate = '';
		this.end = new Date();
		this.title = '';
		this.HolidayTypeID = 0;
		this.HolidayTypeName = '';
		this.HolidayTypeCode = '';
		this.ProjectID = 0;
		this.sundayCheck = true;
		this.sundayText_OT = '';
		this.MondayCheck = true;
		this.MondayText_NT = '';
		this.MondayText_OT = '';
		this.TuesdayCheck = true;
		this.TuesdayText_NT = '';
		this.TuesdayText_OT = '';
		this.WednesdayCheck = true;
		this.WednesdayText_NT = '';
		this.WednesdayText_OT = '';
		this.ThursdayCheck = true;
		this.ThursdayText_NT = '';
		this.ThursdayText_OT = '';
		this.FridayCheck = true;
		this.FridayText_NT = '';
		this.FridayText_OT = '';
		this.SaturdayCheck = true;
		this.SaturdayText_OT = '';
	}
}
export class CompanyCalendarWeekModel extends BaseModel {


		DailyWorkingHrsID: number;
		CompanyID: number;
		ProjectID: number;
		Orderday: number;
		Workinghours: number;
		OtHours: number;
		WeekDay: string;
		IsHoliday: string;



	clear() {
		this.DailyWorkingHrsID =0;
		this.CompanyID = 0;
		this.ProjectID = 0;
		this.Orderday = 0;
		this.Workinghours = 0;
		this.OtHours = 0;
		this.IsHoliday = '';		
	}
}


