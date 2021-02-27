import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
  },{
    path: 'user',
    loadChildren: () => import('./views/user-details/user-details.module').then(m => m.UserDetailsModule)
  },{
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
