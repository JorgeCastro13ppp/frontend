import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  animationDuration?: string;

  cards = [
    { title: 'Ruleta europea', text: 'Actualmente solo se puede apostar a un número, que pagará 36 veces la cantidad apostada.',route: '../games/roulette', image:"../../../assets/roulette-rules.jpg" },
    { title: 'Tragaperras', text: 'Contenido de la tarjeta 2.',route: '../games/slots', image:"../../../assets/slots-rules.jfif" },
    { title: "Póker Texas Hold'em", text: 'Contenido de la tarjeta 3.',route: '../games/poker', image:"../../../assets/poker-rules.jpg" },
    { title: 'Blackjack', text: 'Contenido de la tarjeta 4.',route: '../games/blackjack', image:"../../../assets/blackjack-rules.jpeg" }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
