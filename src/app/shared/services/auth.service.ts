import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,private router:Router) { }
  private apiUrl = 'https://back-end-production-71ca.up.railway.app/api';


  getUser() {
    return this.httpClient.get<User>(`https://back-end-production-71ca.up.railway.app/tests`);
  }

  register(userData: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/register`, userData);
  }
  login(email: string, password: string): Observable<any> {
    // Enviar la solicitud de inicio de sesión al backend
    return this.httpClient.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  logOut() {
    // Eliminar la información del usuario del sessionStorage
    sessionStorage.removeItem('currentUser');
  }


  setSessionTimeout() {
    setTimeout(() => {
      this.logOut();
       this.router.navigate(['/home-page']);
       alert('Se ha finalizado sesión, ha pasado 1 hora');
    }, 3600000); // 3600000 milisegundos = 1 hora
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('currentUser');
  }

}
