import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isMenuCollapsed = true;
  existeToken$ = this.authService.existetoken$;

  constructor( private router: Router,
               private authService: AuthService ) { }

  cerrarSesion() {
    sessionStorage.removeItem('token');
    this.router.navigate(['auth/login']);
    this.authService.existetoken$.next(false)
  }

}
