import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { BalanceService } from '../../services/balance.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() toggleMethod: Function | undefined;
  user:User | null = null;
  userBalance: number | null = null;

  constructor(
    private authService: AuthService,
    private userService:UserService,
    public userBalanceService:BalanceService) { }

  ngOnInit(): void {
    this.userService.getUserByEmail().subscribe(
      (user: User) => {
        this.user = user;
      },
      (error) => {
        console.error('Error al obtener el usuario:', error);
      }
    );

    // Obtener el balance del usuario desde el servicio compartido
    this.userBalanceService.getUserBalance().subscribe(
      (balance: number | null) => {
        this.userBalance = balance;
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

  getUserBalanceParse(): string {
    return this.userBalance ? this.userBalance.toFixed(2) : '0.00';
  }

}
