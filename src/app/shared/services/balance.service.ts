import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private userBalanceSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

  constructor() { }

  setUserBalance(balance: number): void {
    this.userBalanceSubject.next(balance);
  }

  getUserBalance(): Observable<number | null> {
    return this.userBalanceSubject.asObservable();
  }
}
