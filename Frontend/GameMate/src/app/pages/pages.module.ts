import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TerminosycondicinonesComponent } from './terminosycondicinones/terminosycondicinones.component';
import { ProductoComponent } from './producto/producto.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [DashboardIndexComponent, LoginComponent, RegistroComponent, TerminosycondicinonesComponent, ContactoComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ], 
  exports: [DashboardIndexComponent, LoginComponent, RegistroComponent, TerminosycondicinonesComponent, ProductoComponent]
})
export class PagesModule { }
