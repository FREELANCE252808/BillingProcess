
export class TaskHandOverModel {
	FromDate: Date;
	ToDate: Date;
	Message: string;
	HandoverID: number;
	TaskHandoverID: number;
	FromUserID: number;
	HandoverRemark: string;
	CreatedBy: number;
	CreatedOn: Date;
	clear() {
		this.HandoverID = 0;
		this.FromUserID = 0;
		this.TaskHandoverID = 0;
		this.CreatedBy = 0;
		this.FromDate = new Date();
		this.ToDate = new Date();
		this.Message = '';
		this.HandoverRemark = '';
		
	}
}
export class DDlUserModel {
	Name: string;
	Id: number;
}
export class TaskHandoverDetail {
	TaskHandoverDetailID: number=0;
	TaskHandoverID: number=0;
	TaskID: number=0;
	ToUserID: number=0;
	FromDate: Date=new Date();
	ToDate: Date =new Date();
	Active: string ='';
	CompanyID: number=0;
	CreatedBy: number=0;
	ModifyBy: number=0;
	ModifyOn: number=0;
}
export class TaskHandoverPostData {
	TaskHandover: TaskHandOverModel;
	TaskHandoverDetail: TaskHandoverDetail[] = [];
        
    }
