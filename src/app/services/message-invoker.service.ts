import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageInvokerService {

  constructor(private snackBar: MatSnackBar,) { }

  open(message: string, closeTxt?: string, duration?: number) {
    this.snackBar.open(message || "something went wrong", closeTxt || "Close", {
      duration: duration || 500
    });
  }
}
