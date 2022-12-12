import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  existetoken$ = new BehaviorSubject<boolean>(false);

  constructor( private http: HttpClient) {}

  loginUsuario( email:string, password: string ) {
    let payload = { email, password };
    return this.http.post<any>(`${ this.baseUrl }/usuarios/login`, payload );
  }

  registrarUsuario( data:any ) {
    return this.http.post<any>(`${ this.baseUrl }/usuarios`, data );
  }


}
