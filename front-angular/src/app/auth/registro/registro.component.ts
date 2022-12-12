import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  mensaje:string = ""

  registroForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    nombreCompleto: ['', Validators.required],
    username: ['', Validators.required ]
  })

  constructor( private formBuilder: FormBuilder,
               private authService: AuthService ) { }

  ngOnInit(): void {
  }

  registroUsuario() {
    const { email, password, nombreCompleto, username } = this.registroForm.value;

    this.registroForm.markAllAsTouched();

    if(this.registroForm.invalid) {
      return;
    }

    const data = { email, password, nombreCompleto, username }

    if(email && password ) {
      this.authService.registrarUsuario(data).subscribe( res => {
        console.log(res)
      })
    }
  }

  noValidField(name:string):string {
    const errors = this.registroForm.get(name)?.errors;
    const touchedField = this.registroForm.get(name)?.touched;

    if(!this.registroForm) {
      return '';
    }

    if(touchedField && errors && errors['required']) {
      return 'Este dato es requerido'
    } else return '';
  }

}
