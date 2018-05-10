import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorasExtraRoutingModule } from './horas-extra-routing.module';
import { HorasExtraComponent } from './horas-extra.component';

@NgModule({
  imports: [
    CommonModule,
    HorasExtraRoutingModule,
  ],
  declarations: [HorasExtraComponent],
})
export class HorasExtraModule { }
