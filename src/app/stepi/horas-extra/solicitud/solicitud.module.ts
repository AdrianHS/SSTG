import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolicitudComponent } from './solicitud.component';
import { ExampleComponent } from './example/example.component';
import { RealizarComponent } from './realizar/realizar.component';
import { ThemeModule } from '../../../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    SolicitudRoutingModule,
    ThemeModule,
  ],
  declarations: [SolicitudComponent, ExampleComponent, RealizarComponent],
})
export class SolicitudModule { }
