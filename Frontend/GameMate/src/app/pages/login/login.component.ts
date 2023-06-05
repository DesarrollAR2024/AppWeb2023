import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form= this.formBuilder.group({
      mail:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z]).*$/)]]
    })
  }
  
  get Password(){
    return this.form.get("password");
  }
  
  get Mail(){
    return this.form.get("mail");
  }
  
  onEnviar(event: Event){
    event.preventDefault;
    if (this.form.valid){
      alert("Enviar al servidor...")
    } else {
      this.form.markAllAsTouched();
    }
  }

  ngOnInit() {}
  
}
