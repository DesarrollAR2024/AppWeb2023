import { Component } from '@angular/core';
import { Producto } from 'app/Producto';
import { ProductoServiceService } from 'app/service/producto-service.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  producto: Producto[] = [];

  constructor(private productoS: ProductoServiceService) {}

  ngOnInit(): void{
    this.getProducto();
  }

  getProducto(): void{
    this.productoS.getProducto().subscribe(
      data => {
        this.producto = data;
      }
    )
  }
}



