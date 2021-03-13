import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoveChargesRoutingModule } from './move-charges-routing.module';
import { MoveChargesComponent } from './move-charges.component';
import { CustomDialogModule } from 'src/app/components/customdialog/custom-dialog.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MoveChargesComponent],
  imports: [
    CommonModule,
    CustomDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatSidenavModule,
    MatTableModule,
    MatSortModule,
    NgxMatSelectSearchModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    FlexLayoutModule,
    MoveChargesRoutingModule,
  ],
})
export class MoveChargesModule {}
