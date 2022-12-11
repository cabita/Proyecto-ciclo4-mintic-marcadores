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

  obtenerEquipoPorId(id:string) {
    return this.http.get<Equipo>(`${ this.baseUrl }/equipos/${id}`);
  }

  crearEquipo( nombre:string ) {
    let data = { nombre };
    return this.http.post<Equipo>(`${ this.baseUrl }/equipos`, data );
  }

  editarEquipo( id: string, nombre: string ) {
    let data = { id, nombre }

    return this.http.put<Equipo>(`${ this.baseUrl }/equipos`, data );
  }

  eliminarEquipo( id: string ) {
    return this.http.delete<any>(`${ this.baseUrl }/equipos/${id}`);
  }
}
