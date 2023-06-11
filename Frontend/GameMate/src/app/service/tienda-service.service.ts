import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tienda } from 'app/model/Tienda';

@Injectable({
  providedIn: 'root'
})
export class TiendaServiceService {
  private url = 'http://127.0.0.1:8000/api/productos/';

  constructor(private http:HttpClient) { }

  public getTienda(): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(this.url);
  }
}
