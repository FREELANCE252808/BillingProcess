import { BaseModel } from './_base.model';

export class ProjectTempalateModel extends BaseModel {
	ProjectTemplateID: number;
	ProjectTemplateName: string;
	ProjectID: number;
	ProjectName: string;


	clear() {
		this.ProjectTemplateName = '';
		this.ProjectName = '';

	}
}
