import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from '../profesores.service'
import { Profesor } from '../profesores';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InsertarComponent } from '../insertar/insertar.component';

import { ToasterManagerService } from '../../../@core/toast/toaster-manager.service';
import { configToasterManager } from '../../../@core/toast/config';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent implements OnInit {

  constructor(private ProfesoresService: ProfesoresService, private modalService: NgbModal,
    private toasterManagerService: ToasterManagerService) { }

  //Opciones de busqueda.
  opciones = ['Cedula', 'Nombre', 'Apellidos', 'Telefono', 'Email'];
  //Opcion por default.
  opcionSeleccionada: any = 'Cedula';
  private datosProfesores: Profesor[];
  config = configToasterManager;
  ngOnInit() {
    this.getProfesores();
  }

  getProfesores(): void {
    this.ProfesoresService.consultarProfesores()
      .subscribe(res => this.datosProfesores = res['data']);
    //.subscribe(res => console.log(res));
  }

  //Abrir modal, para insertar o para modificar.
  abrirModal(Profesor: Profesor) {
    const modalRef = this.modalService.open(InsertarComponent);
    modalRef.componentInstance.datosProfesores = this.datosProfesores;
    modalRef.componentInstance.profesor = Profesor;
  }

  //Al dar clic al boton de eliminar.
  borrarProfesor(profesor: Profesor) {
    const posicion = this.datosProfesores.findIndex(
      (func: Profesor) => {
        return func.cedula === profesor.cedula;
      },
    );
    this.ProfesoresService.borrarProfesor(profesor)
      .subscribe(() => this.datosProfesores.splice(posicion, 1),
    );
    this.toasterManagerService.makeToast('success', 'Eliminar', 'Profesor eliminado');
  }


}
