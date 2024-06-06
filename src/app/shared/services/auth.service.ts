import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  private apiUrl = 'http://127.0.0.1:8000/api';

  getUser() {
    return this.httpClient.get<User>(`http://127.0.0.1:8000/tests`);
  }

  register(userData: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/register`, userData);
  }
  login(email: string, password: string): Observable<any> {
    // Enviar la solicitud de inicio de sesión al backend
    return this.httpClient.post<any>(`${this.apiUrl}/login`, { email, password });
  }
}
