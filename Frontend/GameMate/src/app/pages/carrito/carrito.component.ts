import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  scriptElement: HTMLScriptElement;
  mostrarMecadoPago() {
    const mercadoPago = document.getElementById("mercadoPagoContainer")
    if (mercadoPago) mercadoPago.style.display = "flex";
  }

  ocultarMercadoPago() {
    const mercadoPago = document.getElementById("mercadoPagoContainer")
    if (mercadoPago) mercadoPago.style.display = "none";
  }

  constructor() {
    this.scriptElement = document.createElement("script");
    this.scriptElement.src = "assets/MercadoPago.js";
    document.body.appendChild(this.scriptElement);
  }
} 
