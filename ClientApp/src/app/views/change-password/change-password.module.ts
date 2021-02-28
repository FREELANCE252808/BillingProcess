import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../login/services/auth.service';
import { UtilityService } from 'src/app/services/utility.service';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    ChangePasswordRoutingModule
  ],
  providers: [AuthService, UtilityService]
})
export class ChangePasswordModule { }
