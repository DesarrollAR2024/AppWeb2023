import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
