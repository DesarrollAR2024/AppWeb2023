import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registroForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required , Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z]).*$/)]]
    });

  }


  ngOnInit() {

  }

  submitRegistroForm() {
    if (this.registroForm.valid) {
      console.log(this.registroForm.value);
    } else {
      console.log('El formulario es inválido');
    }
  }

}
