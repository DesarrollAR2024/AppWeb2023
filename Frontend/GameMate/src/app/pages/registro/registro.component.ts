import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService, Usuario } from 'app/service/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;
  usuario: Usuario = new Usuario();

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nickname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required , Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z]).*$/)]]
    });
  }


  ngOnInit() {

  }

  submitRegistroForm(event: Event, usuario: Usuario): void {
    event.preventDefault;

    if (this.registroForm.valid) {
      console.log("Enviando al servidor...");
      console.log(usuario);
      this.usuarioService.onCrearUsuario(usuario).subscribe(
        data => {
          console.log(data.id);
          if (data.id>0)
          {
            alert("El registro ha sido creado satisfactoriamente. A continuación, por favor Inicie Sesión");
            this.router.navigate(['/login'])
          }
        }
      )
    } else {
      this.registroForm.markAllAsTouched();
      console.log('El formulario es inválido');
    }
  }

  get Password1(){
    return this.registroForm.get("passwword");
  }

  get Mail(){
    return this.registroForm.get("email");
  }

  get Nombre(){
    return this.registroForm.get("nombre");
  }

  get Apellido(){
    return this.registroForm.get("apellido");
  }

  get Nickname(){
    return this.registroForm.get("nickname");
  }


}
