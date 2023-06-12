import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'app/model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {
  private url = 'http://localhost:8000/api/productos/';
  constructor(private http:HttpClient) { }

  public getProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  public save(producto: Producto): Observable<any>{
    return this.http.post<any>(this.url + `create`, producto);
  }

  public update(id: number, producto: Producto): Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, producto);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }  
}
