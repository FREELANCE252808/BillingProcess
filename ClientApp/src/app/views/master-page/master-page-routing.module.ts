import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/authguard/auth.guard';

const routes: Routes = [
        path: '',
        canActivate: [AuthGuard],
        children: [
            {
              path: '',
              loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
            },{
              path: 'user',
              loadChildren: () => import('../user-details/user-details.module').then(m => m.UserDetailsModule)
            },{
              path: 'login',
              loadChildren: () => import('../login/login.module').then(m => m.LoginModule)
            },{
              path: 'change-password',
              loadChildren: () => import('../change-password/change-password.module').then(m => m.ChangePasswordModule)
            }
          ]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterPageRoutingModule { }
