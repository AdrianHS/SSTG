import { NgModule } from '@angular/core';

import { SSTGComponent } from './sstg.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SSTGRoutingModule } from './sstg-routing.module';
import { ThemeModule } from '../@theme/theme.module';
const SSTG_COMPONENTS = [
  SSTGComponent,
];

@NgModule({
  imports: [
    SSTGRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...SSTG_COMPONENTS,
  ],
})
export class SSTGModule {
}
