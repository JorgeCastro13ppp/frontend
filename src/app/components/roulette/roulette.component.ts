import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss']
})
export class RouletteComponent implements OnInit {

  ngOnInit(): void {
  }

  numbers: number[] = [0,3,6,9,12,15,18,21,24,27,30,33,36,2,5,8,11,14,17,20,23,26,29,32,35,1,4,7,10,13,16,19,22,25,28,31,34];
  buttons = [
    { label:'Jugar', class:'btn btn-primary', action:() => this.play() },
    { label:'Doblar', class:'btn btn-light', action:() => this.duplicate()},
    { label:'Borrar', class:'btn btn-secondary', action:() => this.delete() },
    { label:'Repetir',class:'btn btn-warning', action:() => this.repeat() },
    { label:'Salir', class: 'btn btn-danger', action:() => this.exit() }
  ]

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
    throw new Error('Method not implemented.');
  }

  exit() {
    throw new Error('Method not implemented.');
  }
  repeat() {
    throw new Error('Method not implemented.');
  }
}
