import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrizacionRoutingModule } from './parametrizacion-routing.module';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';
import { CrearPlanesComponent } from './planes/crear-planes/crear-planes.component';
import { EditarPlanesComponent } from './planes/editar-planes/editar-planes.component';
import { ListarPlanesComponent } from './planes/listar-planes/listar-planes.component';
import { EliminarPlanesComponent } from './planes/eliminar-planes/eliminar-planes.component';
import { CrearVisitasComponent } from './visitas/crear-visitas/crear-visitas.component';
import { EditarVisitasComponent } from './visitas/editar-visitas/editar-visitas.component';
import { ListarVisitasComponent } from './visitas/listar-visitas/listar-visitas.component';
import { EliminarVisitasComponent } from './visitas/eliminar-visitas/eliminar-visitas.component';
import { CrearProveedorComponent } from './proveedor/crear-proveedor/crear-proveedor.component';
import { EditarProveedorComponent } from './proveedor/editar-proveedor/editar-proveedor.component';
import { ListarProveedorComponent } from './proveedor/listar-proveedor/listar-proveedor.component';
import { EliminarProveedorComponent } from './proveedor/eliminar-proveedor/eliminar-proveedor.component';


@NgModule({
  declarations: [
    CrearProductoComponent,
    EditarProductoComponent,
    ListarProductoComponent,
    EliminarProductoComponent,
    CrearPlanesComponent,
    EditarPlanesComponent,
    ListarPlanesComponent,
    EliminarPlanesComponent,
    CrearVisitasComponent,
    EditarVisitasComponent,
    ListarVisitasComponent,
    EliminarVisitasComponent,
    CrearProveedorComponent,
    EditarProveedorComponent,
    ListarProveedorComponent,
    EliminarProveedorComponent
  ],
  imports: [
    CommonModule,
    ParametrizacionRoutingModule
  ]
})
export class ParametrizacionModule { }
