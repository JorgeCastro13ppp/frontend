import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  private alertSubject = new Subject<string>();

  getAlert() {
    return this.alertSubject.asObservable();
  }

  showAlert(message: string) {
    this.alertSubject.next(message);
  }
}
