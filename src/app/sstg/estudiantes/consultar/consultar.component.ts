import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../estudiantes.service'
import { Estudiante } from '../estudiantes';
import { error } from 'util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InsertarComponent } from '../insertar/insertar.component';
import { ToasterManagerService } from '../../../@core/toast/toaster-manager.service';
import { configToasterManager } from '../../../@core/toast/config';
import 'style-loader!angular2-toaster/toaster.css';
import { ModalConfirmacionService } from '../modal-confirmacion/modal-confirmacion.service';
@Component({
  selector: 'ngx-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: [
      './consultar.component.scss',
  ],
})
export class ConsultarComponent implements OnInit {

  constructor(private estudiantesService: EstudiantesService, private modalService: NgbModal,
    private modalConfirmacionService: ModalConfirmacionService, private toasterManagerService: ToasterManagerService) { }
  datosEstudiantes: Estudiante[];
  config = configToasterManager;
  opciones = ['Carnet', 'Nombre', 'Carrera'];
  opcionSeleccionada: any = 'Carnet';
  getEstudiantes(): void {
    this.estudiantesService.consultarEstudiantes()
      .subscribe(res => { this.datosEstudiantes = <Estudiante[]>res['data'] },
        error => {
          this.toasterManagerService.makeToast('error', 'No se puede obtener usuarios! ',
            'No se puede obtener usuarios debido a un error con el servidor.')
        },
    );
  }
  ngOnInit() {
    this.getEstudiantes();
  }
  abrirModal(estudiante: Estudiante) {
    const modalRef = this.modalService.open(InsertarComponent);
    modalRef.componentInstance.estudiante = estudiante;
    modalRef.componentInstance.listaEstudiantes = this.datosEstudiantes;
  }
  eliminarEstudiante(estudiante: Estudiante) {

    this.modalConfirmacionService.confirmar('Por favor confirme..', '¿Desea borrar el usuario ' + estudiante.nombre + '?')
      .then((confirmed) => {
        if (confirmed) {
          const posicion = this.datosEstudiantes.findIndex(
            (es: Estudiante) => {
              return es.cedula === estudiante.cedula;
            },
          );
          this.estudiantesService.borrarEstudiantes(estudiante.cedula).subscribe(
            () => {
              this.datosEstudiantes.splice(posicion, 1),
                this.toasterManagerService.makeToast('success', 'Se ha borrado exitosamente!',
                  'Se ha eliminado el estudiante ' + estudiante.nombre +
                  ' correctamente.')
            },
            error => {
              this.toasterManagerService.makeToast('error', 'No se completo el eliminar! ',
                'No se ha eliminado el estudiante ' + estudiante.nombre +
                ' debido a un error con el servidor.')
            },
          );

        }
      })
  }
}
