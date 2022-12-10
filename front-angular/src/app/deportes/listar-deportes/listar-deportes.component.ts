import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deporte } from 'src/app/shared/modelos/deportes.interface';
import { DeportesService } from '../deportes.service';

@Component({
  selector: 'app-listar-deportes',
  templateUrl: './listar-deportes.component.html',
  styleUrls: ['./listar-deportes.component.scss']
})
export class ListarDeportesComponent implements OnInit {
  @Input() sizeCard: string = 'small';
  deportes: Deporte[] = [];

  constructor( private deportesService: DeportesService,
               private router: Router ) { }

  ngOnInit(): void {
    this.listarDeportes();
  }

  listarDeportes () {
    this.deportesService.listarDeportes().subscribe( res => {
      this.deportes = res;
    })
  }

  crearDeporte() {
    this.router.navigate(['deportes/crear']);
  }

  editarDeporte(id: string) {
    this.router.navigate([`deportes/editar/${id}`]);
  }

  eliminarDeporte(id:string) {
    this.deportesService.eliminarDeporte(id).subscribe( res => {
      this.listarDeportes();
    })
  }

}
