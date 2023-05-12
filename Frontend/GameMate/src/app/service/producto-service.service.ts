import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {
  private url = 'http://localhost:3000/producto';
  constructor(private http:HttpClient) { }

  getproductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }
}
