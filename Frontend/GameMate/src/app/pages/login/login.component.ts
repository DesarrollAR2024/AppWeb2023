import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth.service';
import { Usuario, UsuarioService } from 'app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  form: FormGroup;
  [x: string]: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){
    this.form= this.formBuilder.group({
      mail:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]]
    })
  }
  
  get Password(){
    return this.form.get("password");
  }
  
  get Mail(){
    return this.form.get("mail");
  }

  get PasswordValid()
  {
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid()
  {
    return this.Mail?.touched && !this.Mail?.valid;
  }   

  ngOnInit(){
  
  }
  
  onEnviar(event: Event, usuario: Usuario): void{
    event.preventDefault;
    this.authService.login(this.usuario)
    .subscribe(
      data => {
      console.log("DATA" + JSON.stringify(data));

      this.router.navigate(['']);
    },
    error => {
      this['error'] = error;
    });
    if (this.form.valid){
      alert("Enviar al servidor...")
    } else {
      this.form.markAllAsTouched();
    }
  }

  
}
