import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submitRegistroForm() {
    if (this.registroForm.valid) {
      //  FALTAA VALLLIDACIONES
      console.log(this.registroForm.value);
    } else {
      // //// FALTAA VALLLIDACIONES ///
      console.log('El formulario es inválido');
    }
  }
}
