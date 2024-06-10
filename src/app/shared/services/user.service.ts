import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://back-end-production-71ca.up.railway.app/api';
  private userEmail: string | null = sessionStorage.getItem('currentUser');
  private depositAmount: number = 250.00;
  private withDrawAmount: number = 100.00;

  constructor(private http:HttpClient) {
    // Obtener el email del usuario del sessionStorage
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
      this.userEmail = JSON.parse(currentUser).email;
    }
  }

  getUserByEmail(): Observable<User> {
    if (!this.userEmail) {
      throw new Error('No se ha iniciado sesión');
    }
    return this.http.get<User>(`${this.apiUrl}/users/${this.userEmail}`);
  }

  // Método para actualizar el balance del usuario
  addBalance(): Observable<User> {
    if (!this.userEmail) {
      throw new Error('No se ha iniciado sesión');
    }
    const url = `${this.apiUrl}/users/${this.userEmail}/update-balance`;
    return this.http.put<User>(url, { amount: this.depositAmount });
  }

  subtractBalance(): Observable<User> {
    if (!this.userEmail) {
      throw new Error('No se ha iniciado sesión');
    }
    const url = `${this.apiUrl}/users/${this.userEmail}/subtract-balance`;
    return this.http.put<User>(url, { amount: this.withDrawAmount });
  }


}
