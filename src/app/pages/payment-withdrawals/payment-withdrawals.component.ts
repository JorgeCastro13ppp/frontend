import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-withdrawals',
  templateUrl: './payment-withdrawals.component.html',
  styleUrls: ['./payment-withdrawals.component.scss']
})
export class PaymentWithdrawalsComponent implements OnInit {

  constructor() {
    console.log('PaymentDepositComponent constructor called');

   }

  ngOnInit(): void {
    console.log('PaymentDepositComponent ngOnInit called');

  }

}
