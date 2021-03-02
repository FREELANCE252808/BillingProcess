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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './views/login/services/auth.service';
import { AccessDeniedPageComponent } from './views/accessDenied-page/accessDenied-page.component';
import { JwtIntercepterService } from './interceptor/jwt.intercepter.service';
import { TokenStorage } from './views/login/services/token-storage.service';
import { AccountService } from './views/login/services/account.service';
import { UtilsService } from './views/login/services/utils.service';
import { CustomDialogModule } from './components/customdialog/custom-dialog.module';

@NgModule({
  declarations: [
    AppComponent,

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
    CustomDialogModule,
    MatIconModule
  ],
  providers: [NavService,TokenStorage,AccountService,
    UtilsService, AuthService,{provide: HTTP_INTERCEPTORS, useClass: JwtIntercepterService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
