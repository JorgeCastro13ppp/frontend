import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MustMatch } from './_helpers';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['',Validators.email],
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirmPassword: ['',Validators.required],
      acceptTerms: [false, Validators.requiredTrue]

    },{
      // validators: MustMatch('password','confirmPassword')
    });
  }

  get f(){
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted=true;

    if(this.registerForm.invalid){
      return
    }
    alert('Éxito \n\n'+JSON.stringify(this.registerForm.value,null,4));
  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }


}
