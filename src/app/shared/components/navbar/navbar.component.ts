import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() toggleMethod: Function | undefined;
  user:User | null = null;

  constructor(
    private authService: AuthService,
    private userService:UserService,
    ) { }

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
