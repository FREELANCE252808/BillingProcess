import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterPageRoutingModule } from './master-page-routing.module';
import { MasterPageComponent } from './master-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [MasterPageComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MasterPageRoutingModule
  ]
})
export class MasterPageModule { }
