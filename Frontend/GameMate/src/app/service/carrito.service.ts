import { Injectable } from '@angular/core';
import { Tienda } from 'app/model/Tienda';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public carritoItemList: any = []
  public TiendaList = new BehaviorSubject<any>([]);

  constructor() { }
  getTienda() {
    return this.TiendaList.asObservable();
  }
  setTienda(tienda: any) {
    this.carritoItemList.push(...tienda);
    this.TiendaList.next(tienda);
  }
  addtoCart(tienda: any) {
    this.carritoItemList.push(tienda);
    this.TiendaList.next(this.carritoItemList);
    this.getTotalPrecio();
    //console.log(this.carritoItemList)
  }
  getTotalPrecio() {
    let grandTotal = 0;
    this.carritoItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCarritoItem(tienda: any) {
    this.carritoItemList.map((a: any, index: any) => {
      if (tienda.id_producto == a.id_producto) {
        this.carritoItemList.splice(index, 1);
      }
    });
    this.TiendaList.next(this.carritoItemList);
  }

  removeAllCart() {
    this.carritoItemList = [];
    this.TiendaList.next(this.carritoItemList);
  }
}
