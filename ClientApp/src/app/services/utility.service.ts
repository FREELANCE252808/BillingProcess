import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  openSnackbar(snackbar, message: string, action: string, className: string, timeElapsed = 4000){
    snackbar.open(message, action, {
      duration: timeElapsed,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: [className]
    });
  }
}
