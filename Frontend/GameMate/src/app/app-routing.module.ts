import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardIndexComponent } from './components/dashboard-index/dashboard-index.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: '', component: DashboardIndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
