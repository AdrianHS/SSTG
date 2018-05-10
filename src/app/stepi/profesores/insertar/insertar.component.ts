import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Profesor } from '../profesores'
import { ProfesoresService } from '../profesores.service';


import { ToasterManagerService } from '../../../@core/toast/toaster-manager.service';
import { configToasterManager } from '../../../@core/toast/config';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss']
})
export class InsertarComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private ProfesoresService: ProfesoresService,
    private toasterManagerService: ToasterManagerService) { }

  @Input() profesor: Profesor;
  @Input() datosProfesores;

  private solicitudActual;

  private Profesores;
  private titulo;

  config = configToasterManager;

  desabilitado: boolean;

  ngOnInit() {
    this.solicitudActual = new Profesor();
    this.ProfesoresService.consultarProfesores()
      .subscribe(res => this.Profesores = res);

    //Si se inicia para insertar    
    if (this.profesor == null) {
      this.solicitudActual = new Profesor();
      this.titulo = 'Insertar';
    }

    //Si se inicia para modificar    
    else {
      this.titulo = 'Modificar';
      this.desabilitado = false;
      this.solicitudActual = Object.assign({}, this.solicitudActual, this.profesor);
    }
  }


  guardarDatos() {
    //Si se inicia para insertar    
    if (this.profesor == null) {
      this.solicitudActual.contrasenna = this.solicitudActual.cedula;
      this.ProfesoresService.insertarProfesor(this.solicitudActual).subscribe(
        res => {
          if (res['status'] === 'success') {
            this.datosProfesores.push(this.solicitudActual)
            this.toasterManagerService.makeToast('success', 'Agregar', 'Profesor agregado');
          }
        }
      );

    }
    //Si se inicia para modificar    
    else {
      this.ProfesoresService.modificarProfesor(this.solicitudActual).subscribe(
        res => {
          if (res['status'] === 'success') {
            this.profesor.nombre = this.solicitudActual.nombre;
            this.profesor.cedula = this.solicitudActual.cedula;
            this.profesor.apellidos = this.solicitudActual.apellidos;
            this.profesor.email = this.solicitudActual.email;
            this.profesor.telefono = this.solicitudActual.telefono;
            this.toasterManagerService.makeToast('success', 'Modificar', 'Profesor modificado');
          }

        });

    }
    this.activeModal.close();
  }


}
