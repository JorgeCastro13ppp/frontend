import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  showAlert: boolean = false;
  alertMessage: string = '';

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.getAlert().subscribe(message => {
      if (message) {
        this.alertMessage = message;
        this.showAlert = true;
        setTimeout(() => this.showAlert = false, 5000);
      }
    });
  }
  closeAlert() {
    this.showAlert = false; // Oculta el alert al hacer clic en el botón "Cerrar"
  }

}
