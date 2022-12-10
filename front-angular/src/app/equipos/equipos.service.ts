import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Equipo } from '../shared/modelos/equipos.interface';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

    baseUrl = environment.baseUrl;

    constructor( private http: HttpClient ) { }

    listarEquipos(): Observable<Equipo[]> {
      return this.http.get<Equipo[]>(`${ this.baseUrl }/equipos`);
    }

}
