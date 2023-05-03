import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
