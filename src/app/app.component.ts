import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'frontend';

  isLoggedIn: boolean = false;

  toggleNavbar() {
    const containerComponent = document.querySelector('.container-components');
    if (containerComponent) {
      containerComponent.classList.toggle('blur-effect');
    }
  }

  closeNavbar() {
    const navbarCollapse = document.querySelector('.navbar-collapse.show');
    const containerComponent = document.querySelector('.container-components');
    if (navbarCollapse && containerComponent) {
      navbarCollapse.classList.remove('show');
      containerComponent.classList.remove('blur-effect');
    }
  }

}
