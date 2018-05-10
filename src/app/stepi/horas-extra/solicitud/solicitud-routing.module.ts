import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SolicitudComponent} from './solicitud.component';
import {RealizarComponent} from './realizar/realizar.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitudComponent,
    children: [
      {
        path: 'realizar',
        component: RealizarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudRoutingModule { }
