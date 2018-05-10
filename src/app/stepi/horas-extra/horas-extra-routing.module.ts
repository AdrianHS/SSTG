import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HorasExtraComponent} from './horas-extra.component';

const routes: Routes = [
  {
    path: '',
    component: HorasExtraComponent,
    children: [
      {
        path: 'solicitud',
        loadChildren: './solicitud/solicitud.module#SolicitudModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorasExtraRoutingModule { }
