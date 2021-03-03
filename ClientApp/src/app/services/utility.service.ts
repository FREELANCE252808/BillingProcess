import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private spinner: NgxSpinnerService) { }

  openSnackbar(snackbar, message: string, action: string, className: string, timeElapsed = 4000){
    snackbar.open(message, action, {
      duration: timeElapsed,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: [className]
    });
  }

  startLoading() {
    this.spinner.show();
  }

  stopLoading() {
    this.spinner.hide();
  }
}
