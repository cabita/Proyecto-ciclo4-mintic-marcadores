import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeportesService } from '../deportes.service';

@Component({
  selector: 'app-crear-deporte',
  templateUrl: './crear-deporte.component.html',
  styleUrls: ['./crear-deporte.component.scss']
})
export class CrearDeporteComponent  {
  error: string = "";

  constructor( private formBuilder: FormBuilder,
               private router: Router,
               private deportesService: DeportesService ) { }

  crearDeporteForm = this.formBuilder.group({
    nombre: ['', Validators.required]
  })

  crearDeporte() {
    this.error = "";

    if(this.crearDeporteForm.invalid) {
      this.error = "Este campo es requerido"
      return;
    }

    let nombre = this.crearDeporteForm.get('nombre')?.value;

    if( nombre ) {
      this.deportesService.crearDeporte(nombre).subscribe( res => {
        this.router.navigate(['admin/deportes']);
      }, (error => {
        this.error = error.error.msj;
      }))
    }
  }

  cancelar():void {
    this.router.navigate(['admin/deportes']);
  }




}
