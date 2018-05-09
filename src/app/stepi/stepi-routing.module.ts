import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { STEPIComponent } from './stepi.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: STEPIComponent,
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
export class STEPIRoutingModule {
}
