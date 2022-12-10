import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/shared/modelos/equipos.interface';
import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-listar-equipos',
  templateUrl: './listar-equipos.component.html',
  styleUrls: ['./listar-equipos.component.scss']
})
export class ListarEquiposComponent implements OnInit {
  equipos:Equipo[] = [];

  constructor( private equiposService: EquiposService ) {}

  ngOnInit(): void {
    this.listarEquipos();
  }

  listarEquipos () {
    this.equiposService.listarEquipos().subscribe( res => {
      this.equipos = res;
    })
  }

}
