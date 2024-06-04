import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent implements OnInit {

  constructor() { }

  bet = 1;
  reel1?:number;
  reel2?:number;
  reel3?:number;
  winnings = 0;

  ngOnInit(): void {
    this.resetReels();
  }

  play(): void {
    this.resetReels();
    this.generateReels();
    this.checkWin();
  }

  increaseBet(): void {
    this.bet++;
  }

  collect(): void {
    this.winnings = 0;
  }

  resetReels(): void {
    this.reel1 = 0;
    this.reel2 = 0;
    this.reel3 = 0;
  }

  generateReels(): void {
    this.reel1 = this.getRandomNumber();
    this.reel2 = this.getRandomNumber();
    this.reel3 = this.getRandomNumber();
  }

  checkWin(): void {
    if (this.reel1 === this.reel2 && this.reel2 === this.reel3) {
      this.winnings = this.bet * 4;
    } else if (this.reel1 === this.reel2 || this.reel2 === this.reel3 || this.reel1 === this.reel3) {
      this.winnings = this.bet * 2;
    }
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
  }



}
