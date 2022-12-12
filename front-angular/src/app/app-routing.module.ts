import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthContainerComponent } from './auth/auth-container/auth-container.component';
import { CrearDeporteComponent } from './deportes/crear-deporte/crear-deporte.component';
import { EditarDeporteComponent } from './deportes/editar-deporte/editar-deporte.component';
import { ListarDeportesComponent } from './deportes/listar-deportes/listar-deportes.component';
import { CrearEquipoComponent } from './equipos/crear-equipo/crear-equipo.component';
import { EditarEquipoComponent } from './equipos/editar-equipo/editar-equipo.component';
import { ListarEquiposComponent } from './equipos/listar-equipos/listar-equipos.component';
import { CrearEventoComponent } from './eventos/crear-evento/crear-evento.component';
import { EditarEventoComponent } from './eventos/editar-evento/editar-evento.component';
import { ListarEventosComponent } from './eventos/listar-eventos/listar-eventos.component';
import { TableroComponent } from './shared/componentes/tablero/tablero.component';

const routes: Routes = [
  { path: 'eventos', component: ListarEventosComponent },
  { path: 'eventos/crear', component: CrearEventoComponent },
  { path: 'eventos/editar/:id', component: EditarEventoComponent},
  { path: 'admin', component: TableroComponent , children: [
    { path: 'eventos', component: ListarEventosComponent },
    { path: 'equipos', component: ListarEquiposComponent },
    { path: 'equipos/crear', component: CrearEquipoComponent },
    { path: 'equipos/editar/:id', component: EditarEquipoComponent},
    { path: 'deportes', component: ListarDeportesComponent },
    { path: 'deportes/crear', component: CrearDeporteComponent },
    { path: 'deportes/editar/:id', component: EditarDeporteComponent},
    { path: 'eventos/crear', component: CrearEventoComponent },
    { path: 'eventos/editar/:id', component: EditarEventoComponent},
    { path: '', component: ListarDeportesComponent}
  ]},
  { path: '', component: ListarEventosComponent},
  {path: 'auth', component: AuthContainerComponent,
  children:[
    {
      path:'', loadChildren:() => import('./auth/auth.module').then(m =>m.AuthModule)
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
