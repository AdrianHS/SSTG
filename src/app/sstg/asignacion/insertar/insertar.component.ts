import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Asignacion } from '../asignacion'
import { AsignacionService } from '../asignacion.service';


import { ToasterManagerService } from '../../../@core/toast/toaster-manager.service';
import { configToasterManager } from '../../../@core/toast/config';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss']
})
export class InsertarComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private AsignacionService: AsignacionService,
    private toasterManagerService: ToasterManagerService) { }

  @Input() asignacion: Asignacion;
  @Input() datosAsignaciones;

  private solicitudActual;

  private Asignaciones;
  private titulo;

  config = configToasterManager;

  desabilitado: boolean;

  ngOnInit() {

  }


  guardarDatos() {

  }


}
