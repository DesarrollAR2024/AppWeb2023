import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tienda } from 'app/model/Tienda';


@Injectable({
  providedIn: 'root'
})
export class TiendaAddService {
  private url = 'http://localhost:8000/api/agregarproducto/';

  constructor(private http:HttpClient) { }

  public detail(id: number): Observable<Tienda>{
    return this.http.get<Tienda>(this.url + `detail/${id}`);
  }

  public save(tienda: Tienda): Observable<any>{
    return this.http.post<any>(this.url, tienda);
  }

  public update(id: number, tienda: Tienda): Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, tienda);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}
