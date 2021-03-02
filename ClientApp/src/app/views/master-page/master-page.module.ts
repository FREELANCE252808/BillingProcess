import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterPageRoutingModule } from './master-page-routing.module';
import { MasterPageComponent } from './master-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';
import { MenuListItemComponent } from 'src/app/components/menu-list-item/menu-list-item.component';


@NgModule({
  declarations: [MasterPageComponent, TopNavComponent, MenuListItemComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MasterPageRoutingModule
  ]
})
export class MasterPageModule { }
