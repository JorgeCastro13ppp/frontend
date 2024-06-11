import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() toggleMethod: Function | undefined;


  constructor(
    private authService: AuthService,
    ) { }

  ngOnInit(): void {

  }

  invokeToggle() {
    if(this.toggleMethod){
      this.toggleMethod();
    }
  }
  isLoggedInNav(): boolean {
    return this.authService.isLoggedIn();
  }

  logOutNav(){
    this.authService.logOut();
  }

}
