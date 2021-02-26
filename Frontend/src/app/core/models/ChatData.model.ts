import { BaseModel } from './_base.model';
export class ChatData extends BaseModel {
	ChatID: number;
	FromUserID: string;
	ToUser: string;
	IsRead: string;
	SendDate: Date;
	CompanyID: number;
	Messages: string;
	

	clear() {
		
		this.ChatID= 0;
		this.FromUserID= "";
		this.ToUser = "";
		this.IsRead= "";
		this.Messages = "";
		this.SendDate = new Date();
		this.CompanyID = 0;
		
	}
	
}
