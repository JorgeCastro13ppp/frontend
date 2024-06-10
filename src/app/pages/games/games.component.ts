import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  animationDuration?: string;

  cards = [
    { title: 'Ruleta europea', text: 'Apuestas a números al pleno e individuales, el número premiado devuelve 36 veces la cantidad apostada',route: '../games/roulette', image:"../../../assets/roulette-rules.jpg",minutes:0  },
    { title: 'Tragaperras', text: '3 rodillos, dos iguales devuelven el doble de lo apostado, tres iguales devuelven 5 veces la cantidad apostada',route: '../games/slots', image:"../../../assets/slots-rules.jfif",minutes:0  },
    { title: "Póker Texas Hold'em", text: 'Mente aguda, estrategia calculada y la tensión en cada mano, donde cualquier carta puede cambiar el destino.',route: '../games/poker', image:"../../../assets/poker-rules.jpg",minutes:0  },
    { title: 'Blackjack', text: 'El desafío de vencer al crupier, la emoción de cada carta y la búsqueda del número mágico: 21.',route: '../games/blackjack', image:"../../../assets/blackjack-rules.jpeg",minutes:0 }
  ];

  constructor() { }

  ngOnInit(): void {
    this.iniciarContadores();
    setInterval(() => {
      this.actualizarTiempos();
    }, 60000); // Actualizar cada 60 segundos
  }

  iniciarContadores(): void {
    this.cards.forEach(card => {
      card.minutes = this.generarNumeroAleatorio(1, 60);
    });
  }

  actualizarTiempos(): void {
    this.cards.forEach(card => {
      card.minutes = (card.minutes + 1) % 61; // Incrementar y asegurarse de que esté entre 1 y 60
    });
  }

  generarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
