import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(
    private authService: AuthService,
    private router:Router,
    private alertService:AlertService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    // Llamar al servicio de autenticación para iniciar sesión
    this.authService.login(this.email, this.password).subscribe(
      (user) => {
        console.log('Usuario autenticado:', user);
        // Guardar la información del usuario en sessionStorage
        const usuario = {
          email: this.email,
          password: this.password
        };
        sessionStorage.setItem('currentUser', JSON.stringify(usuario));
        this.authService.setSessionTimeout();
        // Mostrar alerta de inicio de sesión exitoso
        this.alertService.showAlert('¡Te has logueado!');  // Usa el servicio de alertas
        this.router.navigate(['/home-page']);
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        // Mostrar alerta de error de inicio de sesión
        this.alertService.showAlert('Contraseña o usuario incorrecto');  // Usa el servicio de alertas
      }
    );
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}

