import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileImage: string = '../../../assets/profile-page-image.png';
  user:User | null = null;

  constructor(private userService:UserService,private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.userService.getUserByEmail().subscribe(
      (user: User) => {
        this.user = user;
      },
      (error) => {
        console.error('Error al obtener el usuario:', error);
      }
    );
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    this.hideToast();
  }

  showToast() {
    const customToast = document.getElementById('customToast');
    if (customToast) {
      customToast.classList.remove('d-none');
      customToast.classList.add('d-block'); // Mostrar el toast

      // Reiniciar la animación cada vez que se muestra el toast
      customToast.classList.remove('fade-out');
      customToast.offsetWidth; // Este truco fuerza una reflow, permitiendo que la animación se reinicie

      // Iniciar la animación de desaparición después de 5 segundos
      setTimeout(() => {
        customToast.classList.add('fade-out');
        setTimeout(() => {
          customToast.classList.remove('d-block');
          customToast.classList.add('d-none');
        }, 500);
      }, 5000);
    }
  }

  hideToast() {
    const customToast = document.getElementById('customToast');
    if (customToast) {
      customToast.classList.add('d-none'); // Ocultar el toast al sacar el ratón de la imagen
    }
  }

  deleteAccount() {
    if (confirm('¿Estás seguro de que deseas borrar tu cuenta?')) {
      sessionStorage.clear();
      this.userService.deleteUser().subscribe(
        () => {
          alert('Tu cuenta ha sido borrada exitosamente.');
        },
        (error) => {
          console.error('Error al borrar la cuenta:', error);
          alert('Hubo un error al borrar tu cuenta.');
        },
        () => {
          // Limpiar el sessionStorage y cerrar sesión
          sessionStorage.clear();
          this.authService.logOut();
          this.router.navigate(['/home'])
        }
      );
    }
  }

}

