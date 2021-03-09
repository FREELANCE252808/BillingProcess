import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthService } from './services/auth.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UtilityService } from 'src/app/services/utility.service';
import { AccountService } from './services/account.service';
import { TokenStorage } from './services/token-storage.service';
import { JwtIntercepterService } from 'src/app/interceptor/jwt.intercepter.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LoginRoutingModule,
  ],
  providers: [
    AuthService,
    UtilityService,
    AccountService,
    TokenStorage,
    JwtIntercepterService,
  ],
})
export class LoginModule {}
