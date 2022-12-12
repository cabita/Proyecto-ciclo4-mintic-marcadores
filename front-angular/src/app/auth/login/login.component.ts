import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mensaje:string = ""

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor( private formBuilder: FormBuilder,
               private authService: AuthService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  login() {
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;
    this.loginForm.markAllAsTouched();

    if(this.loginForm.invalid) {
      return;
    }


    if(email && password ) {
      this.authService.loginUsuario(email, password).subscribe( res => {
        sessionStorage.setItem('token', res.token );
        this.authService.existetoken$.next(true)
        this.router.navigate(['eventos'])
      })
    }
  }

  noValidField(name:string):string {
    const errors = this.loginForm.get(name)?.errors;
    const touchedField = this.loginForm.get(name)?.touched;

    if(!this.loginForm) {
      return '';
    }

    if(touchedField && errors && errors['required']) {
      return 'Este dato es requerido'
    } else return '';
  }


}
