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
    this.getTienda();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getTienda(): void{
    this.tiendaS.cargarTienda().subscribe(
      data => {
        this.tienda = data;
      }
    )
  }
}
