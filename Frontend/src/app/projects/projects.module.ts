import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';

@NgModule({
  declarations: [ProjectlistComponent, ProjectdetailComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
