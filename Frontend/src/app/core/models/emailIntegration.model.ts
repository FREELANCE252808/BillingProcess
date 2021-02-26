import { BaseModel } from './_base.model';

export class EmailIntegrationModel extends BaseModel {	
	SMPTHost: string;
	EmailPassword: string;

	clear() {
		this.SMPTHost = '';
		this.EmailPassword = '';	
		
	}
}
