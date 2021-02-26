import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule,
  MatDialogModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule, MatMenuModule,
  MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatDividerModule, MatGridListModule, MatGridList,
  MatGridTile, MatSidenavModule, MatListModule, MatRadioModule, MatSliderModule
} from '@angular/material';
import { FileDropDirective, FileSelectDirective, FileUploadModule } from 'ng2-file-upload';
import {  FileUploadRoutingModule  } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

	declarations: [FileUploadComponent, FileSelectDirective,
		FileDropDirective],
  imports: [ReactiveFormsModule,	FormsModule,CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatDatepickerModule,
    MatDividerModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule,
    MatMenuModule,FileUploadRoutingModule, MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatSidenavModule, MatListModule, MatRadioModule, MatSliderModule],
  exports: [ReactiveFormsModule,	FormsModule,	CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule,
    MatDatepickerModule, MatDividerModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule,
     MatMenuModule, MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatSidenavModule, MatListModule, MatRadioModule, MatSliderModule],
})
export class CustomMaterialModule { }
