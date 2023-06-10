import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from 'app/service/usuario.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://127.0.0.1:8000/api/auth/login/";
  loggedIn = new BehaviorSubject<boolean>(false);
  currentUserSubject: BehaviorSubject<Usuario>;
  currentUser: Observable<Usuario>;

  private get(url: string): Observable<any> {
   const headers = new HttpHeaders().set('X-CSRFToken', 'I1liNbBa8W1oRZLKV1KjlgPPw0Oq2Of2');

   return this.http.get(url, {headers});
  }

  constructor(private http:HttpClient) {
    console.log("Servicio de Autenticación está corriendo");

    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser') || '{}'));

    this.currentUser = this.currentUserSubject.asObservable();
   }

   login(usuario: Usuario): Observable<any>{
    return this.http.post<any>(this.url, usuario)
    .pipe(map(data => {
      localStorage.setItem('currentUsuer', JSON.stringify(data ));

      this.currentUserSubject.next(data);

      this.loggedIn.next(true);

      return data;
    }));
   }

   logout(): void{
    localStorage.removeItem('currentUser');

    this.loggedIn.next(false);
   }

   get usuarioAutenticado(): Usuario {
    return this.currentUserSubject.value;
   }

   get estaAutenticado(): Observable<boolean> {
    return this.loggedIn.asObservable();
   }

}
