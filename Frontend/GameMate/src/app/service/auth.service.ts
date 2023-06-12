import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUsuario } from 'app/model/Login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://localhost:8000/auth/login/";

  constructor(private http:HttpClient) {}

  public nuevo(nuevoUsuario: LoginUsuario): Observable<any>{
    return this.http.post<any>(this.url, nuevoUsuario);
  }

   public login(loginUsuario: LoginUsuario): Observable<any>{
    return this.http.post<any>(this.url, loginUsuario)
   }
}
