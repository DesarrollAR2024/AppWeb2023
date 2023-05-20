import { Component } from '@angular/core';
import { TiendaServiceService } from 'app/service/tienda-service.service';
import { Tienda } from 'app/Tienda';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  tienda: Tienda[] = [];

  constructor(private tiendaS: TiendaServiceService) {}

  ngOnInit(): void{
    this.getTienda();
  }

  getTienda(): void{
    this.tiendaS.getTienda().subscribe(
      data => {
        this.tienda = data;
      }
    )
  }

  products = [
    { name: 'Producto 1', price: 10.99 },
    { name: 'Producto 2', price: 15.99 },
    { name: 'Producto 3', price: 8.99 },
    { name: 'Producto 4', price: 12.99 },
    { name: 'Producto 5', price: 9.99 },
    { name: 'Producto 6', price: 14.99 }
  ];

  cartItems: any[] = [];
  cartTotal: number = 0;

  agregarAlCarrito(product: any) {
    this.cartItems.push(product);
    this.cartTotal += product.price;
    console.log('Producto agregado al carrito:', product);
  }

  quitarDelCarrito(product: any) {
    const index = this.cartItems.indexOf(product);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.cartTotal -= product.price;
    }
    console.log('Producto quitado del carrito:', product);
  }

  calcularTotal() {
    let total = 0;
    for (const item of this.cartItems) {
      total += item.price;
    }
    return total;
  }
}



