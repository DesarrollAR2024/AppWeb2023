import { Component, OnInit } from '@angular/core';
import { Producto } from './Producto' ; 
import { ProductoServiceService } from './service/producto-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'GameMate';

  productos: Producto[] =[];
  constructor(private productoService: ProductoServiceService){}

  ngOnInit(): void {
      this.productoService.getproductos().subscribe((productos) => (this.productos = productos))
  }
}
