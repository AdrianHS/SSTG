import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Estudiante } from '../estudiantes';
import { EstudiantesService } from '../estudiantes.service';
import { ToasterManagerService } from '../../../@core/toast/toaster-manager.service';
import { configToasterManager } from '../../../@core/toast/config';
import 'style-loader!angular2-toaster/toaster.css';
import { ModalConfirmacionService } from '../modal-confirmacion/modal-confirmacion.service';

@Component({
  selector: 'insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss']
})
export class InsertarComponent implements OnInit {

  @Input() estudiante: Estudiante;
  @Input() listaEstudiantes;
  config = configToasterManager;
  constructor(public activeModal: NgbActiveModal, private toasterManagerService: ToasterManagerService,
    private modalConfirmacionService: ModalConfirmacionService, private estudiantesService: EstudiantesService) { }
  solicitudActual;
  titulo: string;
  deshabilitarCedula: boolean;
  ngOnInit() {
    this.solicitudActual = new Estudiante();
    // si el estudiante que viene desde consultar es null, es insertar en caso contrario es modificar.
    if (this.estudiante == null) {
      this.titulo = 'Insertar';
    } else { // si el estudiante no es null, entonces es modificar
      this.titulo = 'Modificar';
      // deshabilitar el input de cedula
      this.deshabilitarCedula = true;
      // se copia el estudiante que viene desde consultar a la solicitud actual
      this.solicitudActual = Object.assign({}, this.solicitudActual, this.estudiante);
    }

  }
  // para guardar los cambios
  guardarDatos() {
    // cuando es insertar
    if (this.estudiante == null) {
      this.solicitudActual.contrasenna = this.solicitudActual.cedula;
      // se envia post al backend para insertar estudiantes.
      console.log('entro');
      this.estudiantesService.insertarEstudiante(this.solicitudActual).subscribe(
        /* Si se recibe status 200 se inserta el estudiante a la lista*/
        res => {
          if (res['status'] == 'success') {
            this.listaEstudiantes.push(this.solicitudActual);
            this.toasterManagerService.makeToast('success', 'Se ha insertado exitosamente!',
              'Se ha insertado el estudiante ' + this.solicitudActual.estudiante +
              ' correctamente.');
          }
        },
        error => {
          this.toasterManagerService.makeToast('error', 'No se completo el agregar! ',
            'No se ha agregado el estudiante ' + this.solicitudActual.nombre_usuario +
            ' debido a un error con el servidor.');
        },
      );
      this.activeModal.close()
    } else {

      this.modalConfirmacionService.confirmar('Por favor confirme..', '¿Quiere modificar el estudiante ' + this.estudiante.nombre + '?')
        .then((confirmed) => {
          if (confirmed) {
            // se envia put al backend para modificar estudiantes.
            this.estudiantesService.modificarEstudiante(this.solicitudActual).subscribe(
              /* se recibe el usuario que se modifico en la base de datos, y se modifica en la lista para poder
              visuarlizar cambios*/
              res => {
                if (res['status'] == 'success') {
                  this.estudiante.nombre = this.solicitudActual.nombre;
                  this.estudiante.apellidos = this.solicitudActual.apellidos;
                  this.estudiante.carrera = this.solicitudActual.carrera;
                  this.estudiante.telefono = this.solicitudActual.telefono;
                  this.estudiante.email = this.solicitudActual.email;
                  this.estudiante.usuario = this.solicitudActual.usuario;

                  this.toasterManagerService.makeToast('success', 'Se ha modificado exitosamente!',
                    'Se ha modificado el estudiante ' + this.solicitudActual.nombre +
                    ' correctamente.');
                }

              },
              error => {
                this.toasterManagerService.makeToast('error', 'No se completo el modificar! ',
                  'No se ha modificado el estudiante ' + this.solicitudActual.nombre +
                  ' debido a un error con el servidor.');
              },
            );
            // se cierra la ventana del modal
            this.activeModal.close()
          }
        })
    }
  }

}
