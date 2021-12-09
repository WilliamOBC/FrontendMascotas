import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { CrearAdministradorComponent } from './crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './editar-administrador/editar-administrador.component';
import { ListarAdministradorComponent } from './listar-administrador/listar-administrador.component';
import { EliminarAdministradorComponent } from './eliminar-administrador/eliminar-administrador.component';


@NgModule({
  declarations: [
    CrearAdministradorComponent,
    EditarAdministradorComponent,
    ListarAdministradorComponent,
    EliminarAdministradorComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
