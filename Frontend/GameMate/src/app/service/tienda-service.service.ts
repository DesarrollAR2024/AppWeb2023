import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tienda } from '../Tienda';
import { Producto } from 'app/Producto';

@Injectable({
  providedIn: 'root'
})
export class TiendaServiceService {
  private apiUrl = 'http://localhost:8000/api/v1productos/';

  constructor(private http:HttpClient) { }

  public getTienda(): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(this.apiUrl);
  }

  public addToCart(): Observable<Producto[]> {
    return this.http.post<any>(this.apiUrl, Producto);
  }

  public makePayment(paymentInfo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, paymentInfo);
  }
}
