import { BaseModel } from './_base.model';

export class ProjectAdditionalModel extends BaseModel {
	ProjectBufferColumnsMasterID: number;
	DataType: string;
	DisplayColName: string;
	

	clear() {
		this.DataType = '';
		this.DisplayColName = '';
		
	}
}
