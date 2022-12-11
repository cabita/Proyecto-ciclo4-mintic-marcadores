import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-editar-equipo',
  templateUrl: './editar-equipo.component.html',
  styleUrls: ['./editar-equipo.component.scss']
})
export class EditarEquipoComponent implements OnInit {
  error: string = "";
  id: string = '';

  constructor( private formBuilder: FormBuilder,
               private router: Router,
               private equiposService: EquiposService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.obtenerEquipoPorId(params['id']);
   })
  }

  editarEquipoForm = this.formBuilder.group({
    nombre: ['', Validators.required]
  })

  obtenerEquipoPorId(id:string) {
    this.equiposService.obtenerEquipoPorId(id).subscribe( res => {
      this.editarEquipoForm.get('nombre')?.setValue(res.nombre);
    })
  }

  editarEquipo() {
    this.error = ""
    if(this.editarEquipoForm.invalid) {
      this.error = "Este campo es requerido"
      return;
    }

    let nombre = this.editarEquipoForm.get('nombre')?.value;

    if( nombre ) {
      this.equiposService.editarEquipo(this.id, nombre).subscribe( res => {
        this.router.navigate(['/equipos']);
      }, (error => {
        this.error = error.error.msj;
      }))
    }
  }



  cancelar():void {
    this.router.navigate(['/equipos']);
  }

}
