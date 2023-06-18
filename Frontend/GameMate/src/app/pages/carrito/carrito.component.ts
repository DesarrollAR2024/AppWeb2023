import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'app/service/carrito.service';
import { loadMercadoPago } from '@mercadopago/sdk-js';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  scriptElement: HTMLScriptElement;
  public Tienda: any = [];
  public grandTotal: number = 0;


  constructor(private carritoServicio: CarritoService) {
    this.scriptElement = document.createElement("script");
    this.scriptElement.src = "assets/MercadoPago.js";
    document.body.appendChild(this.scriptElement);
  }
  mostrarMecadoPago() {
    const mercadoPago = document.getElementById("mercadoPagoContainer")
    if (mercadoPago) mercadoPago.style.display = "flex";
  }

  ocultarMercadoPago() {
    const mercadoPago = document.getElementById("mercadoPagoContainer")
    if (mercadoPago) mercadoPago.style.display = "none";
  }

  ngOnInit(): void {
    this.carritoServicio.getTienda()
      .subscribe(res => {
        this.Tienda = res;
        this.grandTotal = this.carritoServicio.getTotalPrecio();
      })
  }
  removeproducto(Tienda: any) {
    this.carritoServicio.removeCarritoItem(Tienda);
  }
  emptycarrito() {
    this.carritoServicio.removeAllCart();
  }
}
