import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarComponent } from './consultar/consultar.component';
import { ThemeModule } from '../../@theme/theme.module';
import { AsignacionRoutingModule } from './asignacion-routing.module';
import { AsignacionComponent } from './asignacion.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AsignacionService } from './asignacion.service';
import { InsertarComponent } from './insertar/insertar.component';
import { ToasterManagerService } from '../../@core/toast/toaster-manager.service';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    AsignacionRoutingModule,
    NgxPaginationModule,
    ToasterModule.forRoot()
  ],
  declarations: [AsignacionComponent, ConsultarComponent, InsertarComponent],
  providers: [AsignacionService, ToasterManagerService],
  entryComponents: [InsertarComponent]
})
export class AsignacionModule { }
