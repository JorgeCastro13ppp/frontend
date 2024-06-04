import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from '../../routes/games/games-routing.module';
import { RouletteComponent } from 'src/app/components/roulette/roulette.component';
import { SlotsComponent } from 'src/app/components/slots/slots.component';
import { PokerComponent } from 'src/app/components/poker/poker.component';
import { BlackjackComponent } from 'src/app/components/blackjack/blackjack.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RouletteComponent,
    SlotsComponent,
    PokerComponent,
    BlackjackComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    FormsModule,

  ],
  exports: [
    RouletteComponent,
    SlotsComponent,
    PokerComponent,
    BlackjackComponent
  ]
})
export class GamesModule { }
