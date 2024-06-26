import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/core/app-routing.module';
import { GamesModule } from './modules/games/games.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BetsComponent } from './components/bets/bets.component';
import { GamesComponent } from './pages/games/games.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaymentDepositComponent } from './pages/payment-deposit/payment-deposit.component';
import { PaymentWithdrawalsComponent } from './pages/payment-withdrawals/payment-withdrawals.component';
import { HelpComponent } from './pages/help/help.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AlertComponent } from './shared/components/alert/alert.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BetsComponent,
    GamesComponent,
    NavbarComponent,
    HomeComponent,
    ErrorComponent,
    ProfileComponent,
    PaymentDepositComponent,
    PaymentWithdrawalsComponent,
    HelpComponent,
    ContactComponent,
    FooterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GamesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
