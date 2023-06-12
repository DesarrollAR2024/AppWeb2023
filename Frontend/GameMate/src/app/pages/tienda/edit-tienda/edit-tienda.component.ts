import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tienda } from 'app/model/Tienda';
import { TiendaDelService } from 'app/service/tienda-del.service'; 

@Component({
  selector: 'app-edit-tienda',
  templateUrl: './edit-tienda.component.html',
  styleUrls: ['./edit-tienda.component.css']
})
export class EditTiendaComponent implements OnInit{
  tienda!: Tienda;

  constructor(private tiendaEdit: TiendaDelService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.tiendaEdit.detail(id).subscribe(
      data =>{
        this.tienda = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['tienda']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.tiendaEdit.update(id, this.tienda).subscribe(
      data =>{
        this.router.navigate(['tienda']);
      }, err =>{
        alert("Error al modificar el producto");
        this.router.navigate(['tienda'])
      }
    )
  }

  cancelar(){
    this.router.navigate(['tienda']);
  }
}
