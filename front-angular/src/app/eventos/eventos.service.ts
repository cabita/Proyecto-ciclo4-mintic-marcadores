import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evento } from '../shared/modelos/eventos.interface';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  baseUrl = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  listarEventos(){
    return this.http.get<Evento[]>(`${ this.baseUrl }/eventos`);
  }

  obtenerEventoPorId(id:string) {
    return this.http.get<Evento>(`${ this.baseUrl }/eventos/${id}`);
  }

  crearEvento( data:any ) {
    let payload = {
      _deporteId: data.deporte,
      _equipo1: data.equipo1,
      _equipo2: data.equipo2,
      marcador1: data.marcador1,
      marcador2: data.marcador2,
      fechaEvento: new Date()
     };
    return this.http.post<Evento>(`${ this.baseUrl }/eventos`, payload );
  }

  editarEvento( id: string, data:any ) {
    let payload = {
      id,
      _deporteId: data.deporte,
      _equipo1: data.equipo1,
      _equipo2: data.equipo2,
      marcador1: data.marcador1,
      marcador2: data.marcador2
     };
    return this.http.put<any>(`${ this.baseUrl }/eventos`, payload );
  }

  eliminarEvento( id: string ) {
    return this.http.delete<any>(`${ this.baseUrl }/eventos/${id}`);
  }

}
