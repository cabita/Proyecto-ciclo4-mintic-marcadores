import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEventosComponent } from './listar-eventos/listar-eventos.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';



@NgModule({
  declarations: [
    CrearEventoComponent,
    EditarEventoComponent,
    ListarEventosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CrearEventoComponent,
    EditarEventoComponent,
    ListarEventosComponent
  ]
})
export class EventosModule { }
