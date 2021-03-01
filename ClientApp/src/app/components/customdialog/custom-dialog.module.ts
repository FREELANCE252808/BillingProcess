import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomdialogComponent } from './customdialog.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CustomdialogComponent],
  entryComponents: [CustomdialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CustomDialogModule { }
