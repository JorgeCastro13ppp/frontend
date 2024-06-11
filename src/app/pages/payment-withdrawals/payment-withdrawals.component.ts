import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-payment-withdrawals',
  templateUrl: './payment-withdrawals.component.html',
  styleUrls: ['./payment-withdrawals.component.scss']
})
export class PaymentWithdrawalsComponent implements OnInit {

  withDrawForm:FormGroup = new FormGroup({});


  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private userService:UserService,
    private alertService:AlertService) { }

  ngOnInit(): void {
    this.withDrawForm = this.formBuilder.group({
      nombreTitular: ['', [Validators.required, Validators.minLength(10)]],
      numeroTarjeta: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      fechaCaducidad: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/(\d{2})$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });

    // Ocultar el alert después de 7 segundos
    setTimeout(() => {
      document.querySelector('.alert')?.classList.add('d-none');
    }, 7000);
  }

  submitForm() {
    if (this.withDrawForm.valid) {
      // Realizar acción de depósito
      console.log('Formulario válido, se puede proceder con el retiro.');
      this.userService.subtractBalance().subscribe(
        (response) => {
          console.log('Retiro realizado:', response);
          this.alertService.showAlert('Se ha realizado el retiro.');
          this.router.navigate(['/profile-page']);
        },
        (error) => {
          console.error('Error al realizar el retiro:', error);
          this.alertService.showAlert('Error al realizar el retiro.');
          this.router.navigate(['/profile-page']);
        }
      );
    } else {
      // Mostrar errores o mensaje de que el formulario no es válido
      console.log('Formulario inválido, no se puede proceder con el retiro.');
      this.alertService.showAlert('No se puede proceder con el retiro.');  // Usa el servicio de alertas
      this.router.navigate(['/profile-page']);
    }
  }

}
