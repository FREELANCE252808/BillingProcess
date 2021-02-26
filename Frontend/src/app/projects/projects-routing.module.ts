import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';

const routes: Routes = [
	{
		path: '', component : ProjectlistComponent
	},
	{
		path: 'projectlist', component : ProjectlistComponent
	}
	,
	{
		path: 'projectdetail', component : ProjectdetailComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
