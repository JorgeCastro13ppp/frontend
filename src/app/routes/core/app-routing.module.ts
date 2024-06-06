import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { ErrorComponent } from '../../pages/error/error.component';
import { GamesComponent } from '../../pages/games/games.component';
import { BetsComponent } from '../../components/bets/bets.component';
import { RegisterComponent } from '../../auth/register/register.component';
import { LoginComponent } from '../../auth/login/login.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { PaymentDepositComponent } from 'src/app/pages/payment-deposit/payment-deposit.component';
import { PaymentWithdrawalsComponent } from 'src/app/pages/payment-withdrawals/payment-withdrawals.component';
import { HelpComponent } from 'src/app/pages/help/help.component';


const routes: Routes = [
  {path:'',redirectTo:'home-page', pathMatch:'full'},
  {path:'home-page',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'profile-page',component: ProfileComponent},
  {path:'bets',component: BetsComponent},
  {path:'games-page',component: GamesComponent},
  {path:'deposit-page',component: PaymentDepositComponent},
  {path:'withdrawals-page',component: PaymentWithdrawalsComponent},
  {path:'help-page',component: HelpComponent},
  {path:'games',loadChildren: ()=>import('../../modules/games/games.module').then(g=>g.GamesModule), data: {parent:true}},
  {path:'**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
