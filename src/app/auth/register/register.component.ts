import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

 import { MustMatch } from '../../shared/ui/mustMatch.validator';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

  constructor(private authService:AuthService) { }

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
          console.log('Usuario registrado con éxito', response);
        },
        error => {
          console.error('Error en el registro', error);
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

}
