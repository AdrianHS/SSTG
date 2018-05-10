import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarComponent } from './consultar/consultar.component';
import { ThemeModule } from '../../@theme/theme.module';
import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './estudiantes.component';
@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    EstudiantesRoutingModule,
  ],
  declarations: [EstudiantesComponent, ConsultarComponent],
})
export class EstudiantesModule { }
