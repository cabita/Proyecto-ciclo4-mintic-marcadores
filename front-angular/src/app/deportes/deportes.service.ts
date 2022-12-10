import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Deporte } from '../shared/modelos/deportes.interface';


@Injectable({
  providedIn: 'root'
})
export class DeportesService {

  baseUrl = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  listarDeportes(): Observable<Deporte[]> {
    return this.http.get<Deporte[]>(`${ this.baseUrl }/deportes`);
  }

  obtenerDeportePorId(id:string) {
    return this.http.get<Deporte>(`${ this.baseUrl }/deportes/${id}`);
  }

  crearDeporte( nombre:string ) {
    let deporte = { nombre };
    return this.http.post<Deporte>(`${ this.baseUrl }/deportes`, deporte );
  }

  editarDeporte( id: string, nombre: string ) {
    let datosDeporte = { id, nombre }
    console.log(datosDeporte)
    return this.http.put<Deporte>(`${ this.baseUrl }/deportes`, datosDeporte );
  }

  eliminarDeporte( id: string ) {
    return this.http.delete<any>(`${ this.baseUrl }/deportes/${id}`);
  }

}
