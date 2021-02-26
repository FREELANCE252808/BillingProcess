import { BaseModel } from "./_base.model";

export class Chat extends BaseModel {
  picture: string;
	name: string;
	noticountCount: number;
  
	clear() {
		this.picture = "/assets/images/userProfile/profile-user.jpg";
		this.name = "";
		this.noticountCount = 0;
	}
  //constructor(model: any = null) {
  //  this.picture = model.picture;
  //  this.name = model.name;
  //}
}
