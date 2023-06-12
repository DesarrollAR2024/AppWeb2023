import { Component } from '@angular/core';
import { TiendaService } from 'app/service/tienda.service';
import { Tienda } from 'app/model/Tienda';
import { TokenService } from 'app/service/token.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  tienda: Tienda[] = [];

  constructor(private tiendaS: TiendaService, private tokenService: TokenService) {}
  isLogged = false;

  ngOnInit(): void{
    this.cargarTienda();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarTienda(): void{
    this.tiendaS.lista().subscribe(
      data => {
        this.tienda = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.tiendaS.delete(id).subscribe(
        data => {
          this.cargarTienda();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
