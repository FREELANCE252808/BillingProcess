import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChargesComponent } from './add-charges.component';

const routes: Routes = [{ path: '', component: AddChargesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddChargesRoutingModule {}
