import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarComponent } from './consultar/consultar.component';
import { ThemeModule } from '../../@theme/theme.module';
import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './estudiantes.component';
import { EstudiantesService } from './estudiantes.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FiltroPipe } from './filtro.pipe';
import { InsertarComponent } from './insertar/insertar.component';
import { ToasterManagerService } from '../../@core/toast/toaster-manager.service';
import { ToasterModule } from 'angular2-toaster';
import { ModalConfirmacionComponent } from './modal-confirmacion/modal-confirmacion.component';
import { ModalConfirmacionService } from './modal-confirmacion/modal-confirmacion.service';
@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    EstudiantesRoutingModule,
    NgxPaginationModule,
    ToasterModule.forRoot(),
  ],
  declarations: [EstudiantesComponent, ConsultarComponent, FiltroPipe, InsertarComponent, ModalConfirmacionComponent],
  providers: [EstudiantesService, ToasterManagerService, ModalConfirmacionService],
  entryComponents: [InsertarComponent, ModalConfirmacionComponent],
})
export class EstudiantesModule { }
