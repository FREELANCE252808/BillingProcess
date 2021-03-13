import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoveChargesComponent } from './move-charges.component';

const routes: Routes = [
  {
    path: '',
    component: MoveChargesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoveChargesRoutingModule {}
