import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavService } from './services/nav.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './views/login/services/auth.service';
import { AccessDeniedPageComponent } from './views/accessDenied-page/accessDenied-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MenuListItemComponent,
    AccessDeniedPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [NavService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
