import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SSTGComponent } from './sstg.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: SSTGComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'examples',
      loadChildren: './examples/examples.module#ExamplesModule',
    },
    {
      path: 'horas-extra',
      loadChildren: './horas-extra/horas-extra.module#HorasExtraModule',
    },
    {
      path: 'estudiantes',
      loadChildren: './estudiantes/estudiantes.module#EstudiantesModule',
    },
    {
      path: 'profesores',
      loadChildren: './profesores/profesores.module#ProfesoresModule',
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SSTGRoutingModule {
}
