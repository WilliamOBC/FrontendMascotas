import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './publico/errores/error404/error404.component';
import { InicioComponent } from './publico/inicio/inicio.component';

const routes: Routes = [
  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'parametros',
    loadChildren: () => import('./modulos/parametrizacion/parametrizacion.module').then(m => m.ParametrizacionModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./modulos/administrador/administrador.module').then(m => m.AdministradorModule)
  },
  {
    path: 'asesor',
    loadChildren: () => import('./modulos/asesor/asesor.module').then(m => m.AsesorModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./modulos/cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'mascota',
    loadChildren: () => import('./modulos/mascota/mascota.module').then(m => m.MascotaModule)
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./modulos/solicitudes/solicitudes.module').then(m => m.SolicitudesModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./modulos/usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./modulos/seguridad/seguridad.module').then(m => m.SeguridadModule)
  },
  //este comodin siempre debe ir a lo ultimo
  {
    path:'error404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo:'/error404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
