import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackjackComponent } from 'src/app/components/blackjack/blackjack.component';
import { PokerComponent } from 'src/app/components/poker/poker.component';
import { RouletteComponent } from 'src/app/components/roulette/roulette.component';
import { SlotsComponent } from 'src/app/components/slots/slots.component';

const routes: Routes = [
{ path: '',children:[
  {path: 'roulette', component: RouletteComponent},
  {path: 'slots', component: SlotsComponent},
  {path: 'poker', component: PokerComponent},
  {path: 'blackjack', component: BlackjackComponent},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
