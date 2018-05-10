import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarComponent } from './consultar/consultar.component';
import { ThemeModule } from '../../@theme/theme.module';
import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ProfesoresComponent } from './profesores.component';
import { FiltroPipe } from './filtro.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfesoresService } from './profesores.service';
import { InsertarComponent } from './insertar/insertar.component';
import { ToasterManagerService } from '../../@core/toast/toaster-manager.service';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    ProfesoresRoutingModule,
    NgxPaginationModule,
    ToasterModule.forRoot()
  ],
  declarations: [ProfesoresComponent, ConsultarComponent, FiltroPipe, InsertarComponent],
  providers: [ProfesoresService, ToasterManagerService],
  entryComponents: [InsertarComponent]
})
export class ProfesoresModule { }
