import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessDeniedPageComponent } from './views/accessDenied-page/accessDenied-page.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/master-page/master-page.module').then(m => m.MasterPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
  },
  {
		path: '**',
		component: AccessDeniedPageComponent
	},{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
