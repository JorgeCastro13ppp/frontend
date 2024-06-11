import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import emailjs from '@emailjs/browser';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private http:HttpClient, private alertService:AlertService) { }



  ngOnInit(): void {
    this.contactForm = this.fb.group({
      to_name: ['', [Validators.required, Validators.minLength(5)]],
      from_email: ['', [Validators.required, Validators.email]],
      subject: ['',[Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(9)]],
      message: ['' ,[Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      emailjs.send("service_ykps7rd","template_8yicm0i",{
        to_name: this.contactForm.value.to_name,
        from_email: this.contactForm.value.from_email,
        subject: this.contactForm.value.subject,
        phone: this.contactForm.value.phone,
        message: this.contactForm.value.message,
        },"GIDzzd_Mz94Ysi5Z2");
        this.alertService.showAlert('Mensaje enviado, revisa tu correo electrónico.');  // Usa el servicio de alertas
        this.contactForm.reset();
    } else {
      console.log('Formulario no válido');
    }
  }

}
