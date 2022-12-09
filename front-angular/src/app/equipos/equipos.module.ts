import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEquipoComponent } from './crear-equipo/crear-equipo.component';
import { EditarEquipoComponent } from './editar-equipo/editar-equipo.component';
import { ListarEquiposComponent } from './listar-equipos/listar-equipos.component';



@NgModule({
  declarations: [
    CrearEquipoComponent,
    EditarEquipoComponent,
    ListarEquiposComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CrearEquipoComponent,
    EditarEquipoComponent,
    ListarEquiposComponent
  ]
})
export class EquiposModule { }
