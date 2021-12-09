import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotaRoutingModule } from './mascota-routing.module';
import { CrearMascotaComponent } from './crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './eliminar-mascota/eliminar-mascota.component';
import { ListarMascotaComponent } from './listar-mascota/listar-mascota.component';


@NgModule({
  declarations: [
    CrearMascotaComponent,
    EditarMascotaComponent,
    EliminarMascotaComponent,
    ListarMascotaComponent
  ],
  imports: [
    CommonModule,
    MascotaRoutingModule
  ]
})
export class MascotaModule { }
