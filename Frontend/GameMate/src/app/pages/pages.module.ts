import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [DashboardIndexComponent, LoginComponent, RegistroComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ], 
  exports: [DashboardIndexComponent, LoginComponent, RegistroComponent]
})
export class PagesModule { }
