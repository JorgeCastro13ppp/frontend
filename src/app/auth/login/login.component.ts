import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit():void{
    // Llamar al servicio de autenticación para iniciar sesión
    this.authService.login(this.email, this.password).subscribe(
      (user) => {
        console.log('Usuario autenticado:', user);
        // Aquí puedes redirigir al usuario a otra página o hacer otras acciones después de iniciar sesión correctamente
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    );
  }
}

