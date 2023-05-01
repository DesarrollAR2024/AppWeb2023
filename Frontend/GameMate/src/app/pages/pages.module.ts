import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaComponent } from './tienda/tienda.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from 'app/app-routing.module';



@NgModule({
  declarations: [
    TiendaComponent, RegistroComponent, LoginComponent, DashboardIndexComponent
  ],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [DashboardIndexComponent, TiendaComponent, RegistroComponent, LoginComponent]
})
export class PagesModule { }
