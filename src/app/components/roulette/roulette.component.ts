import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss']
})
export class RouletteComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {
  }

  numbers: number[] = [0,3,6,9,12,15,18,21,24,27,30,33,36,2,5,8,11,14,17,20,23,26,29,32,35,1,4,7,10,13,16,19,22,25,28,31,34];
  buttons = [
    { label:'Jugar', class:'btn btn-primary', action:() => this.play() },
    { label:'Doblar', class:'btn btn-light', action:() => this.duplicate()},
    { label:'Borrar', class:'btn btn-secondary', action:() => this.delete() },
    { label:'Repetir',class:'btn btn-warning', action:() => this.repeat() },
    { label:'Salir', class: 'btn btn-danger', action:() => this.exit() }
  ];
  totalGames: number = 0;
  totalWins: number = 0;
  totalLosses: number = 0;
  showAlert: boolean = false;
  alertMessage: string = '';

  selectedNumberControl?:number;
  selectedMoneyControl?:number;

  selectNumber(num: number) {
    this.selectedNumberControl=num;
    console.log(this.selectedNumberControl);
    console.log(num);
  }

  delete(){
    this.selectedNumberControl = undefined;
    console.log(this.selectedNumberControl);
    this.selectedMoneyControl=undefined;
    console.log(this.selectedMoneyControl);
  }

  duplicate(){
    if(this.selectedMoneyControl){
      const currentValue = this.selectedMoneyControl;
      this.selectedMoneyControl = currentValue * 2;
    }
  }

  play() {
    if (this.selectedNumberControl !== undefined && this.selectedMoneyControl !== undefined) {
      this.totalGames++;
      this.showAlertMessage('Ruleta girando...');

      setTimeout(() => {
        const winningNumber = Math.floor(Math.random() * 37);
        this.showAlert = false;

        setTimeout(() => {
          this.showAlertMessage(`Número premiado: ${winningNumber}`, true);

          setTimeout(() => {
            this.showAlert = false;
            if (winningNumber === this.selectedNumberControl) {
              this.totalWins++;
              this.showAlertMessage('¡Has ganado!', true);
            } else {
              this.totalLosses++;
              this.showAlertMessage('Has perdido.', true);
            }
            this.delete(); // Llamar a la función delete al final del juego
          }, 4000);
        }, 100);
      }, 4000);
    } else {
      this.showAlertMessage('Por favor, selecciona un número y un monto de dinero para jugar.', true);
    }
  }

  showAlertMessage(message: string, hideAfterTimeout: boolean = false) {
    this.alertMessage = message;
    this.showAlert = true;

    if (hideAfterTimeout) {
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    }
  }

  exit() {
    this.router.navigate(['/games-page']);
  }
  repeat() {
    throw new Error('Method not implemented.');
  }
}
