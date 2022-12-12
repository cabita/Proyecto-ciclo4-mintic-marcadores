import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonesAdminComponent } from './componentes/botones-admin/botones-admin.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { SelectComponent } from './componentes/select/select.component';
import { InputComponent } from './componentes/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TituloSeccionComponent } from './componentes/titulo-seccion/titulo-seccion.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AlertaComponent } from './componentes/alerta/alerta.component';
import { CardComponent } from './componentes/card/card.component';
import { RouterLink, RouterModule } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BotonesAdminComponent,
    ModalComponent,
    BotonComponent,
    SelectComponent,
    InputComponent,
    TituloSeccionComponent,
    HeaderComponent,
    AlertaComponent,
    CardComponent,
    TableroComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbCollapseModule,
    RouterLink
  ],
  exports: [
    BotonComponent,
    InputComponent,
    SelectComponent,
    HeaderComponent,
    TituloSeccionComponent,
    CardComponent,
    MenuComponent
  ]
})
export class SharedModule { }
