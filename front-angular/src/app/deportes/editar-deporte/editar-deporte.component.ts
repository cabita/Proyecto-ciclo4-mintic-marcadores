import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeportesService } from '../deportes.service';

@Component({
  selector: 'app-editar-deporte',
  templateUrl: './editar-deporte.component.html',
  styleUrls: ['./editar-deporte.component.scss']
})
export class EditarDeporteComponent implements OnInit {
  error: string = "";
  id: string = '';

  constructor( private formBuilder: FormBuilder,
               private router: Router,
               private deportesService: DeportesService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.obtenerDeportePorId(params['id']);
   })
  }

  editarDeporteForm = this.formBuilder.group({
    nombre: ['', Validators.required]
  })

  obtenerDeportePorId(id:string) {
    this.deportesService.obtenerDeportePorId(id).subscribe( res => {
      this.editarDeporteForm.get('nombre')?.setValue(res.nombre);
    })
  }

  editarDeporte() {
    this.error = ""
    if(this.editarDeporteForm.invalid) {
      this.error = "Este campo es requerido"
      return;
    }

    let nombre = this.editarDeporteForm.get('nombre')?.value;

    if( nombre ) {
      this.deportesService.editarDeporte(this.id, nombre).subscribe( res => {
        this.router.navigate(['/deportes']);
      }, (error => {
        this.error = error.error.msj;
      }))
    }
  }



  cancelar():void {
    this.router.navigate(['/deportes']);
  }



}
