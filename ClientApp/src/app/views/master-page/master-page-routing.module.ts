import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/authguard/auth.guard';
import { MasterPageComponent } from './master-page.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'add-charges',
        loadChildren: () =>
          import('../add-charges/add-charges.module').then(
            (m) => m.AddChargesModule
          ),
      },
      {
        path: 'move-charges',
        loadChildren: () =>
          import('../move-charges/move-charges.module').then(
            (m) => m.MoveChargesModule
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../user-details/user-details.module').then(
            (m) => m.UserDetailsModule
          ),
      },
      {
        path: 'change-password',
        loadChildren: () =>
          import('../change-password/change-password.module').then(
            (m) => m.ChangePasswordModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterPageRoutingModule {}
