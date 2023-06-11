import { Component } from '@angular/core';
import { TiendaServiceService } from 'app/service/tienda-service.service';
import { Tienda } from 'app/model/Tienda';

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
}
