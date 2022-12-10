import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/shared/modelos/eventos.interface';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-listar-eventos',
  templateUrl: './listar-eventos.component.html',
  styleUrls: ['./listar-eventos.component.scss']
})
export class ListarEventosComponent implements OnInit {
  eventos:Evento[] = [];

  constructor( private eventosService: EventosService ) {}

  ngOnInit(): void {
    this.listarEquipos();
  }

  listarEquipos () {
    this.eventosService.listarEventos().subscribe( res => {
      this.eventos = res;
    })
  }

}
