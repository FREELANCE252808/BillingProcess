import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailEditComponent } from './emailsSMSTemplate-edit/email-edit.component';
import { EmailViewComponent } from './emailsSMSTemplate-list/email-view.component';
const routes: Routes = [
	{
		path: '', component : EmailViewComponent
	},
	{
		path: 'templetelist', component: EmailViewComponent

	}
	,
	{
		 path: 'add', component : EmailEditComponent
	}
	,
	{
		 path: 'update/:id', component : EmailEditComponent
    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailsSMSTemplateRoutingModule { }
