import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/shared/modelos/equipos.interface';
import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-listar-equipos',
  templateUrl: './listar-equipos.component.html',
  styleUrls: ['./listar-equipos.component.scss']
})
export class ListarEquiposComponent implements OnInit {
  @Input() sizeCard: string = 'small';
  equipos: Equipo[] = [];

  constructor( private equiposService: EquiposService,
               private router: Router ) { }

  ngOnInit(): void {
    this.listarEquipos();
  }

  listarEquipos () {
    this.equiposService.listarEquipos().subscribe( res => {
      this.equipos = res;
    })
  }

  crearEquipo() {
    this.router.navigate(['admin/equipos/crear']);
  }

  editarEquipo(id: string) {
    this.router.navigate([`admin/equipos/editar/${id}`]);
  }

  eliminarEquipo(id:string) {
    this.equiposService.eliminarEquipo(id).subscribe( res => {
      this.listarEquipos();
    })
  }

}
