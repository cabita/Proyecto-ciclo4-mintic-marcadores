import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeportesService } from 'src/app/deportes/deportes.service';
import { EquiposService } from 'src/app/equipos/equipos.service';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.scss']
})
export class CrearEventoComponent implements OnInit {
  error: string = "";
  equipos:any[] = [];
  deportes:any[] = [];

  constructor( private eventosService: EventosService,
               private equiposService: EquiposService,
               private deportesService: DeportesService,
               private router: Router,
               private formBuilder: FormBuilder ) { }

  crearEventoForm = this.formBuilder.group({
    equipo1: ['', Validators.required],
    equipo2: ['', Validators.required],
    deporte: ['', Validators.required],
    marcador1: ['', Validators.required],
    marcador2: ['', Validators.required]
  })

  ngOnInit(): void {
    this.arrayOpcionesEquipos();
    this.arrayOpcionesDeportes();
  }

  crearEvento() {
    this.crearEventoForm.markAllAsTouched();

    if(this.crearEventoForm.invalid) {
      return;
    }

    let {deporte, equipo1, equipo2, marcador1, marcador2} = this.crearEventoForm.value;
    let data = {
      deporte,
      equipo1,
      equipo2,
      marcador1,
      marcador2
    }

    if( data ) {
      this.eventosService.crearEvento(data).subscribe( res => {
        this.router.navigate(['admin/eventos']);
      }, (error => {
        this.error = error.error.msj;
      }))
    }
  }

  cancelar():void {
    this.router.navigate(['admin/eventos']);
  }

  arrayOpcionesDeportes() {
    this.deportesService.listarDeportes().subscribe( res => {
      res.map( deporte => {
        this.deportes.push({key: deporte._id, value: deporte.nombre})
      })
    })
  }

  arrayOpcionesEquipos() {
    this.equiposService.listarEquipos().subscribe( res => {
      res.map( equipo => {
        this.equipos.push({key: equipo._id, value: equipo.nombre})
      })
    })
  }

  noValidField(name:string):string {
    const errors = this.crearEventoForm.get(name)?.errors;
    const touchedField = this.crearEventoForm.get(name)?.touched;

    if(!this.crearEventoForm) {
      return '';
    }

    if(touchedField && errors && errors['required']) {
      return 'Este dato es requerido'
    } else return '';
  }


}
