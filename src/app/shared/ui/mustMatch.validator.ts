import { ValidatorFn, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';


// custom validator to check that two fields match
export const MustMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {


  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  // Validar si la confirmación de contraseña es requerida
  if (!confirmPassword?.value) {
    confirmPassword?.setErrors({ 'required': true });
    return { 'required': true };
  } else {
    confirmPassword?.setErrors(null);
  }

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ 'unMatch': true });
    return { 'unMatch': true };
  } else {
    confirmPassword?.setErrors(null);
    return null;
  }
};
