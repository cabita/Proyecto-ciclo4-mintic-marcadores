import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { DeportesService } from 'src/app/deportes/deportes.service';
import { EquiposService } from 'src/app/equipos/equipos.service';
import { Deporte } from 'src/app/shared/modelos/deportes.interface';
import { Equipo } from 'src/app/shared/modelos/equipos.interface';
import { Evento } from 'src/app/shared/modelos/eventos.interface';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-listar-eventos',
  templateUrl: './listar-eventos.component.html',
  styleUrls: ['./listar-eventos.component.scss']
})
export class ListarEventosComponent implements OnInit {
  eventos:Evento[] = [];
  equipos:Equipo[] = [];
  deportes:Deporte[] = [];

  constructor( private eventosService: EventosService,
               private equiposService: EquiposService,
               private deportesService: DeportesService,
               private router: Router ) {}

  ngOnInit(): void {
    this.listarDeportes();
    this.listarEquipos();
    this.listarEventos();

  }

  listarEventos () {
    this.eventosService.listarEventos().pipe(map((data:any) => data.map((evento:any)=> {
      evento._id = evento._id;
      evento._equipo1 = this.filtrarPorId(evento._equipo1, this.equipos);
      evento._equipo2 = this.filtrarPorId(evento._equipo2, this.equipos);
      evento._deporteId = this.filtrarPorId(evento._deporteId, this.deportes);
      evento.marcador1 = evento.marcador1
      evento.marcador2 = evento.marcador2;
      return evento
      })))

    .subscribe((results) =>{
        this.eventos = results;
    });
  }

  crearEvento() {
    this.router.navigate(['eventos/crear']);
  }

  listarEquipos() {
    this.equiposService.listarEquipos().subscribe( res => {
      this.equipos = res;
    });
  }

  listarDeportes() {
    this.deportesService.listarDeportes().subscribe( res => {
      this.deportes = res;
    })
  }

  filtrarPorId(id:string, data:any[]) {
    if(data.length) {
      return data?.find( item => item._id === id).nombre
    }

  }

  editarEvento(id: string) {
    this.router.navigate([`eventos/editar/${id}`]);
  }

  eliminarEvento(id:string) {
    this.eventosService.eliminarEvento(id).subscribe( res => {
      this.listarEventos();
    })
  }

}
