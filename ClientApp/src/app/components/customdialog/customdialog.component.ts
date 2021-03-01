
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-customdialog',
  templateUrl: './customdialog.component.html',
  styleUrls: ['./customdialog.component.scss']
})
export class CustomdialogComponent  {

  constructor(
    public dialogRef: MatDialogRef<CustomdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


}
