import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  cards = [
    { title: 'Ruleta europea', text: 'Actualmente solo se puede apostar a un número, que pagará 36 veces la cantidad apostada.',route: '../games/roulette' },
    { title: 'Tragaperras', text: 'Contenido de la tarjeta 2.',route: '../games/slots' },
    { title: "Póker Texas Hold'em", text: 'Contenido de la tarjeta 3.',route: '../games/poker' },
    { title: 'Blackjack', text: 'Contenido de la tarjeta 4.',route: '../games/blackjack' }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
