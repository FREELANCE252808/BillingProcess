import { BaseModel } from './_base.model';

export class CompanyHolidayModel extends BaseModel {
	id: number;
	HolidayTypeName: string;
	HolidayTypeCode: string;
	

	clear() {
		this.HolidayTypeName = '';
		this.HolidayTypeCode = '';
		
	}
}
