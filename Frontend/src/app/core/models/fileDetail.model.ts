import { BaseModel } from './_base.model';

export class FileDetailModel extends BaseModel {
	id: number;
	projectcode: string;
	projectname: string;
	TaskName: string;
	TaskFileDetailID: number;
	FileName: string;
	WorkflowID: number;
	FileSize: string;
	FileStatus: string;
	

	clear() {
		this.projectcode = '';
		this.projectname = '';
		this.TaskName = '';
		this.FileName = '';
		this.FileSize = '';
		this.FileStatus = '';
	}
}
