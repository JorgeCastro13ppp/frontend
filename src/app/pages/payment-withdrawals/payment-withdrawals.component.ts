import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-withdrawals',
  templateUrl: './payment-withdrawals.component.html',
  styleUrls: ['./payment-withdrawals.component.scss']
})
export class PaymentWithdrawalsComponent implements OnInit {

  withDrawForm:FormGroup = new FormGroup({});


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.withDrawForm = this.formBuilder.group({
      nombreTitular: ['', [Validators.required, Validators.minLength(10)]],
      numeroTarjeta: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      fechaCaducidad: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/(\d{2})$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });
  }

  submitForm() {
    if (this.withDrawForm.valid) {
      // Realizar acción de depósito
      console.log('Formulario válido, se puede proceder con el retiro');
      alert('Se procederá con el retiro.')
    } else {
      // Mostrar errores o mensaje de que el formulario no es válido
      console.log('Formulario inválido, no se puede proceder con el retiro');
      alert('No se puede proceder con el retiro')
    }
  }

}
