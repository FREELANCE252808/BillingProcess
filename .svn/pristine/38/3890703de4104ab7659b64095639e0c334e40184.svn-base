import { BaseModel } from './_base.model';

export class RoleRightsModel extends BaseModel {
	companyID: number;
	roleRightsID: number;
	roleID: number;
	moduleID: number;
	View: boolean;
	add: boolean;
	edit: boolean;
	delete: boolean;
	createdOn: Date;
	createdBy: number;
	clear() {
		this.companyID=0;
		this.roleRightsID=0;
		this.roleID=0;
		this.moduleID = 0;
		this.View = false;
		this.add= false;
		this.edit= false;
		this.delete= false;
		this.createdOn=null;
		this.createdBy = 0;
		this.canAdd = false;
		this.canDelete = false;
		this.canEdit = false;
		this.canView = false;

	}
}
