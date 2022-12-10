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

  listarEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${ this.baseUrl }/eventos`);
  }

}
