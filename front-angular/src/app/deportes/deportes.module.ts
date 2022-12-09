import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearDeporteComponent } from './crear-deporte/crear-deporte.component';
import { EditarDeporteComponent } from './editar-deporte/editar-deporte.component';
import { ListarDeportesComponent } from './listar-deportes/listar-deportes.component';



@NgModule({
  declarations: [
    CrearDeporteComponent,
    EditarDeporteComponent,
    ListarDeportesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CrearDeporteComponent,
    EditarDeporteComponent,
    ListarDeportesComponent
  ]
})
export class DeportesModule { }
