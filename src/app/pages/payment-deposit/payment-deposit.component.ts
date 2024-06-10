import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-payment-deposit',
  templateUrl: './payment-deposit.component.html',
  styleUrls: ['./payment-deposit.component.scss']
})
export class PaymentDepositComponent implements OnInit {
  depositForm:FormGroup = new FormGroup({});


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.depositForm = this.formBuilder.group({
      nombreTitular: ['', [Validators.required, Validators.minLength(10)]],
      numeroTarjeta: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      fechaCaducidad: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/(\d{2})$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });
  }

  submitForm() {
    if (this.depositForm.valid) {
      // Realizar acción de depósito
      console.log('Formulario válido, se puede proceder con el depósito');
      alert('Se procederá con el depósito.')
    } else {
      // Mostrar errores o mensaje de que el formulario no es válido
      console.log('Formulario inválido, no se puede proceder con el depósito');
      alert('No se puede proceder con el depósito')
    }
  }

}
