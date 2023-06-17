import { Component } from '@angular/core';
import { Producto } from 'app/model/Producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'app/service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  producto: any ={};

  constructor(private productoS: ProductoService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void{
    this.getProducto();
  }

  getProducto(): void{
    let id = this.activatedRoute.snapshot.params['id'];
    console.log("id" + id);
    this.productoS.detail(id).subscribe(
      data => {
        this.producto = data;
      }, err => {
        alert("Error de comunicación");
        this.router.navigate(['tienda']);
      }
    )
  }
}



