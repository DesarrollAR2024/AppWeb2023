import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { TerminosycondicinonesComponent } from './pages/terminosycondicinones/terminosycondicinones.component';

const routes: Routes = [
  { path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  { path: 'login', component: LoginComponent},
  { path: 'producto', component: ProductoComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'terminosycondiciones', component: TerminosycondicinonesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
