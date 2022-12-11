import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.scss']
})
export class CrearEquipoComponent {

  error: string = "";

  constructor( private formBuilder: FormBuilder,
               private router: Router,
               private equiposService: EquiposService ) { }

  crearEquipoForm = this.formBuilder.group({
    nombre: ['', Validators.required]
  })

  crearEquipo() {
    this.error = "";

    if(this.crearEquipoForm.invalid) {
      this.error = "Este campo es requerido"
      return;
    }

    let nombre = this.crearEquipoForm.get('nombre')?.value;

    if( nombre ) {
      this.equiposService.crearEquipo(nombre).subscribe( res => {
        this.router.navigate(['admin/equipos']);
      }, (error => {
        this.error = error.error.msj;
      }))
    }
  }

  cancelar():void {
    this.router.navigate(['admin/equipos']);
  }


}
