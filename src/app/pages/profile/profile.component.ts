import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileImage: string = '../../../assets/profile-page-image.png';

  constructor() { }

  ngOnInit(): void {
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

}

