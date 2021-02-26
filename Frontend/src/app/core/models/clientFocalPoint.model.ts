import { BaseModel } from './_base.model';

export class ClientFocalPointModel extends BaseModel {
	id: number;
	ClientFocalName: string;
	ClientFocalCode: string;
	ClientID: number;
	

	clear() {
		this.ClientFocalName = '';
		this.ClientFocalCode = '';
	}
}
