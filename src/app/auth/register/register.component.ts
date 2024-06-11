import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

 import { MustMatch } from '../../shared/ui/mustMatch.validator';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  passwordFieldType: string = 'password';
  confirmPasswordFieldType: string = 'password';

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(8)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6),
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{6,}$')]),
    confirmPassword: new FormControl('',[Validators.required]),
    termsAccepted: new FormControl(false,[Validators.requiredTrue])
  },
     { validators: MustMatch}
  );

  constructor(
    private authService:AuthService,
    private router:Router,
    private alertService:AlertService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      const registerData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
      };
      this.authService.register(registerData).subscribe(
        response => {
          this.alertService.showAlert('Te has registrado, serás redirigido al inicio de sesión');  // Usa el servicio de alertas
          console.log('Usuario registrado con éxito', response);
          this.registerForm.reset();
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        },
        error => {
          console.error('Error en el registro', error);
          if (error.error && error.error.errors && error.error.errors.email) {
            // El error es debido a que el correo electrónico ya está en uso
            this.alertService.showAlert('El correo electrónico ya está en uso. Por favor, intenta con otro.');  // Usa el servicio de alertas
          } else {
            // Otro tipo de error
            this.alertService.showAlert('Hubo un error en el registro. Por favor, inténtalo de nuevo más tarde.');  // Usa el servicio de alertas
          }
        }
      );
    }
  }


  markCheckbox() {
    this.registerForm.get('termsAccepted')?.setValue(true);
  }

  unMarkCheckbox(){
    this.registerForm.get('termsAccepted')?.setValue(false);
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordFieldType = this.confirmPasswordFieldType === 'password' ? 'text' : 'password';
  }

}
