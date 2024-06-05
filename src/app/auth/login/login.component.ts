import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user?:User;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Suponiendo que tienes el userId del usuario
    this.authService.getUser().subscribe(
      (data: User) => {
        this.user = data;
      },
      error => {
        console.error('Error al obtener datos del usuario:', error);
      }
    );

    console.log(this.user);
  }
}

