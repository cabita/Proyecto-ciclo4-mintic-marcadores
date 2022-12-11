import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeportesService } from 'src/app/deportes/deportes.service';
import { EquiposService } from 'src/app/equipos/equipos.service';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.scss']
})
export class EditarEventoComponent implements OnInit {
  error: string = "";
  equipos:any[] = [];
  deportes:any[] = [];
  id:string = "";

  constructor( private eventosService: EventosService,
               private equiposService: EquiposService,
               private deportesService: DeportesService,
               private router: Router,
               private formBuilder: FormBuilder,
               private activatedRoute: ActivatedRoute ) { }

  editarEventoForm = this.formBuilder.group({
    equipo1: ['', Validators.required],
    equipo2: ['', Validators.required],
    deporte: ['', Validators.required],
    marcador1: [0, Validators.required],
    marcador2: [0, Validators.required]
  })

  ngOnInit(): void {
    this.arrayOpcionesEquipos();
    this.arrayOpcionesDeportes();
    this.obtenerParametroUrl();
  }

  obtenerParametroUrl() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.obtenerEventoPorId(params['id']);
   })
  }

  editarEvento() {
    this.editarEventoForm.markAllAsTouched();

    if(this.editarEventoForm.invalid) {
      return;
    }

    let {deporte, equipo1, equipo2, marcador1, marcador2} = this.editarEventoForm.value;
    let data = {
      deporte,
      equipo1,
      equipo2,
      marcador1,
      marcador2
    }

    if( data ) {
      this.eventosService.editarEvento(this.id, data).subscribe( res => {
        this.router.navigate(['/eventos']);
      }, (error => {
        this.error = error.error.msj;
      }))
    }
  }

  cancelar():void {
    this.router.navigate(['/eventos']);
  }

  obtenerEventoPorId(id:string) {
    this.eventosService.obtenerEventoPorId(id).subscribe( res => {
      this.editarEventoForm.get('equipo1')?.setValue(res._equipo1);
      this.editarEventoForm.get('equipo2')?.setValue(res._equipo2);
      this.editarEventoForm.get('marcador1')?.setValue(res.marcador1);
      this.editarEventoForm.get('marcador2')?.setValue(res.marcador2);
      this.editarEventoForm.get('deporte')?.setValue(res._deporteId);
    })
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
    const errors = this.editarEventoForm.get(name)?.errors;
    const touchedField = this.editarEventoForm.get(name)?.touched;

    if(!this.editarEventoForm) {
      return '';
    }

    if(touchedField && errors && errors['required']) {
      return 'Este dato es requerido'
    } else if(errors && errors['maxlength']) {

      return `El número máximo de caracteres es ${errors['maxlength'].requiredLength}`
    }
    else return '';
  }


}
