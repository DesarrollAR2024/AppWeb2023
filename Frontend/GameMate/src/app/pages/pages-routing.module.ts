import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TerminosycondicinonesComponent } from './terminosycondicinones/terminosycondicinones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoComponent } from './producto/producto.component';
import { TiendaComponent } from './tienda/tienda.component';

const routes: Routes = [
  { path: '', component: DashboardIndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'terminos', component: TerminosycondicinonesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'tienda', component: TiendaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
