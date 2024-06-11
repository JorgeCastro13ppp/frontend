import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import emailjs from '@emailjs/browser';
import { AlertService } from '../../services/alert.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  subscribeForm!: FormGroup;

  constructor(private fb: FormBuilder, private alertService:AlertService) { }

  ngOnInit(): void {
    this.subscribeForm = this.fb.group({
      to_email: ['', [ Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.subscribeForm.valid) {
      console.log(this.subscribeForm.value);
      emailjs.send("service_ykps7rd","template_zwwmeir",{
        to_email: this.subscribeForm.value.to_email,
        },"GIDzzd_Mz94Ysi5Z2");
        this.alertService.showAlert('Te has suscrito a nuestros Feeds, revisa tu correo electrónico.');  // Usa el servicio de alertas
        this.subscribeForm.reset();
    } else {
      console.log('Formulario no válido');
    }
  }

}
