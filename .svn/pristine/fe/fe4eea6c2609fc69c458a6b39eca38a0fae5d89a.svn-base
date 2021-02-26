import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleEditDialogComponent } from './role-edit/role-edit.dialog.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RolePermissonComponent } from './role-Permission/role-Permission.component';
const routes: Routes = [
	{
		path: '', component : RoleListComponent
	},
	{
		path: 'rolelist', component: RoleListComponent

	},
	{
		path: 'addupdate/:id', component : RoleEditDialogComponent
	}
	,
	{
		path: 'rolerights/:id', component : RolePermissonComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolerightRoutingModule { }
