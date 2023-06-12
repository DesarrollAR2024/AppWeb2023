import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tienda } from 'app/model/Tienda';
import { TiendaAddService } from 'app/service/tienda-add.service';

@Component({
  selector: 'app-new-tienda',
  templateUrl: './new-tienda.component.html',
  styleUrls: ['./new-tienda.component.css']
})
export class NewTiendaComponent implements OnInit {
  precio: string = "";
  stock: number = 0;
  nombre: string  = "";
  descripcion: string  = "";
  proveedor: string  = "";
  categoria: string  = "";

    constructor(private tiendaAdd: TiendaAddService, private router: Router){}

    ngOnInit(): void {}

    onCreate(): void{
      const tienda = new Tienda(this.precio, this.stock, this.nombre, this.descripcion, this.proveedor, this.categoria);
      this.tiendaAdd.save(tienda).subscribe(
        data =>{
          alert("Producto añadido correctamente");
          this.router.navigate(['tienda']);
        }, err =>{
          alert("Falló");
          this.router.navigate(['tienda']);
        }
      )
    }

    cancelar(){
      this.router.navigate(['tienda']);
    }

}
