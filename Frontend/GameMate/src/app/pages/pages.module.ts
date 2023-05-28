import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductoComponent } from './producto/producto.component';
import { RegistroComponent } from './registro/registro.component';
import { TerminosycondicinonesComponent } from './terminosycondicinones/terminosycondicinones.component';
import { TiendaComponent } from './tienda/tienda.component';
import { PagesRoutingModule } from './pages-routing.module';
<<<<<<< HEAD

=======
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
>>>>>>> 8bbf2f892366585fcaa9057ff439a3ebcdddf455

@NgModule({
    declarations: [DashboardIndexComponent, LoginComponent, RegistroComponent, TerminosycondicinonesComponent, TiendaComponent, ContactoComponent, ProductoComponent, NosotrosComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
<<<<<<< HEAD

=======
        ReactiveFormsModule,
        FormsModule
>>>>>>> 8bbf2f892366585fcaa9057ff439a3ebcdddf455
    ],
    exports: [DashboardIndexComponent, LoginComponent, RegistroComponent, TerminosycondicinonesComponent, ContactoComponent, ProductoComponent, TiendaComponent, NosotrosComponent]
  })

export class PagesModule { }
