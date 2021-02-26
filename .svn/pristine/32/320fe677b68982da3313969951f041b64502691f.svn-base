import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersEditDialogComponent } from './user-edit/users-edit.dialog.component';
import { UserListComponent } from './user-list/user-list.component';
const routes: Routes = [
	{
		path: '', component : UserListComponent
	},
	{
		path: 'userlist', component: UserListComponent

	}
	,
	{
		 path: 'add', component : UsersEditDialogComponent
	}
	,
	{
		 path: 'update/:id', component : UsersEditDialogComponent
    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
