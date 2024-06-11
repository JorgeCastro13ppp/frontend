import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-payment-deposit',
  templateUrl: './payment-deposit.component.html',
  styleUrls: ['./payment-deposit.component.scss']
})
export class PaymentDepositComponent implements OnInit {
  depositForm:FormGroup = new FormGroup({});


  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private userService:UserService,
    private alertService:AlertService) { }

  ngOnInit(): void {
    this.depositForm = this.formBuilder.group({
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
    if (this.depositForm.valid) {
      // Realizar acción de depósito
      console.log('Formulario válido, se puede proceder con el depósito');
      this.userService.addBalance().subscribe(
        (response) => {
          console.log('Depósito realizado:', response);
          this.alertService.showAlert('Se ha realizado el depósito.');  // Usa el servicio de alertas
          this.router.navigate(['/profile-page']);
        },
        (error) => {
          console.error('Error al realizar el depósito:', error);
          this.alertService.showAlert('Error al realizar el depósito.');
          this.router.navigate(['/profile-page']);
        }
      );
    } else {
      // Mostrar errores o mensaje de que el formulario no es válido
      console.log('Formulario inválido, no se puede proceder con el depósito');
      this.alertService.showAlert('No se puede proceder con el depósito');
      this.router.navigate(['/profile-page']);
    }
  }

}
