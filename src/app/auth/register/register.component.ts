import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

 import { MustMatch } from '../../shared/ui/mustMatch.validator';
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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  markCheckbox() {
    this.registerForm.get('termsAccepted')?.setValue(true);
  }

  unMarkCheckbox(){
    this.registerForm.get('termsAccepted')?.setValue(false);
  }

}
