import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit {
  deportes: any[] = [
    {
      nombre: 'Fútbol',
      imgUrl: '../../../../assets/futbol-messi.jpg',
      descripcion: 'El juego hermoso: pasión, estrategia y emoción en cada gol.',
      actualizacion: 'Actualizado hace 3 mins',
      ruta:'/football',
      minutos: 0
    },
    {
      nombre: 'Baloncesto',
      imgUrl: '../../../../assets/baloncesto-lebron.jfif',
      descripcion: 'Alturas y habilidades se combinan en un baile aéreo de tiros y bloqueos.',
      actualizacion: 'Actualizado hace 5 mins',
      ruta:'/basketball',
      minutos: 0
    },
    {
      nombre: 'Tenis',
      imgUrl: '../../../../assets/tenis-rafa.avif',
      descripcion: 'La elegancia del servicio, la agilidad en la red y la precisión en cada golpe.',
      actualizacion: 'Actualizado hace 10 mins',
      ruta:'/tennis',
      minutos: 0
    },
    {
      nombre: 'Balonmano',
      imgUrl: '../../../../assets/balon-mano.jpg',
      descripcion: 'Velocidad, fuerza y trabajo en equipo en un emocionante juego de lanzamientos y defensas.',
      actualizacion: 'Actualizado hace 12 mins',
      ruta:'/handball',
      minutos: 0
    },
    {
      nombre: 'Golf',
      imgUrl: '../../../../assets/golf-ram.jfif',
      descripcion: 'Concentración, precisión y paisajes deslumbrantes en cada golpe.',
      actualizacion: 'Actualizado hace 15 mins',
      ruta:'/golf',
      minutos: 0
    },
    {
      nombre: 'Carreras de Galgos',
      imgUrl: '../../../../assets/carreras-galgos.avif',
      descripcion: 'La velocidad y la gracia de los galgos en una carrera por la victoria.',
      actualizacion: 'Actualizado hace 20 mins',
      ruta:'/race-dogs',
      minutos: 0
    },
    {
      nombre: 'Carreras de Caballos',
      imgUrl: '../../../../assets/carreras-caballos.jpg',
      descripcion: 'La potencia y la belleza de los caballos en una competición de velocidad y resistencia',
      actualizacion: 'Actualizado hace 25 mins',
      ruta:'/race-horses',
      minutos: 0
    },
    {
      nombre: 'Atletismo',
      imgUrl: '../../../../assets/atletismo.avif',
      descripcion: 'El desafío de la velocidad, la resistencia y la técnica en una variedad de disciplinas.',
      actualizacion: 'Actualizado hace 30 mins',
      ruta:'/athletics',
      minutos: 0
    },
    {
      nombre: 'Béisbol',
      imgUrl: '../../../../assets/beisbol.webp',
      descripcion: 'El bateo perfecto, el lanzamiento impecable y el robo de bases en un juego de estrategia y habilidad.',
      actualizacion: 'Actualizado hace 35 mins',
      ruta:'/baseball',
      minutos: 0
    },
    {
      nombre: 'Boxeo',
      imgUrl: '../../../../assets/boxeo-canelo.webp',
      descripcion: 'La intensidad del ring, la fuerza de los golpes y la resistencia del espíritu humano.',
      actualizacion: 'Actualizado hace 40 mins',
      minutos: 0
    },
    {
      nombre: 'MMA',
      imgUrl: '../../../../assets/mma-mc.jfif',
      descripcion: 'Combate cuerpo a cuerpo, donde se mezclan diversas disciplinas para la supremacía en el octágono.',
      actualizacion: 'Actualizado hace 45 mins',
      ruta:'/mma',
      minutos: 0
    },
    {
      nombre: 'Fórmula 1',
      imgUrl: '../../../../assets/formula1-fernando.webp',
      descripcion: 'La velocidad extrema, la tecnología de vanguardia y la emoción de las carreras en los circuitos más icónicos del mundo.',
      actualizacion: 'Actualizado hace 50 mins',
      ruta:'/formula-1',
      minutos: 0
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.iniciarContadores();
    setInterval(() => {
      this.actualizarTiempos();
    }, 60000); // Actualizar cada 60 segundos
  }

  iniciarContadores(): void {
    this.deportes.forEach(deporte => {
      deporte.minutos = this.generarNumeroAleatorio(1, 60);
    });
  }

  actualizarTiempos(): void {
    this.deportes.forEach(deporte => {
      deporte.minutos = (deporte.minutos + 1) % 61; // Incrementar y asegurarse de que esté entre 1 y 60
    });
  }

  generarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
