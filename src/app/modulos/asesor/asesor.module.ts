import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { CrearAsesorComponent } from './crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './eliminar-asesor/eliminar-asesor.component';
import { ListarAsesorComponent } from './listar-asesor/listar-asesor.component';


@NgModule({
  declarations: [
    CrearAsesorComponent,
    EditarAsesorComponent,
    EliminarAsesorComponent,
    ListarAsesorComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
