import { NgModule } from '@angular/core';

import { STEPIComponent} from './stepi.component';
import { DashboardModule } from './dashboard/dashboard.module';
import {STEPIRoutingModule} from './stepi-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const STEPI_COMPONENTS = [
  STEPIComponent,
];

@NgModule({
  imports: [
    STEPIRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...STEPI_COMPONENTS,
  ],
})
export class STEPIModule {
}
