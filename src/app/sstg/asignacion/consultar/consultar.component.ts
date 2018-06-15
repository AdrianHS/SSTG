import { Component, OnInit } from '@angular/core';
import { AsignacionService } from '../asignacion.service'
import { Asignacion } from '../asignacion';
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

  private estudiante: string;
  private estudiantes: string[];
  private tutor: string;
  private tutores: string[];
  private jurado: string;
  private jurados: string[];
  private enfoque: string;
  private enfoques: string[];

  constructor(private ProfesoresService: AsignacionService, private modalService: NgbModal,
    private toasterManagerService: ToasterManagerService) { }

  private datosAsignacion: Asignacion[];
  config = configToasterManager;
  ngOnInit() {
    //this.getDatos();
    this.estudiantes = ["Allan Trejos", "Rachel Barahona", "Camilo Avellaneda", "Sarah Gonzalez"];
    this.tutores = ["Andrea Gonzalez", "Daniel Castro", "Johan Altamirano", "Beatriz Rodriguez"];
    this.jurados = ["Rafael Contreras", "Francisco Sevilla", "Carlos Vasquez", "Rebeca Alpizar"];
    this.enfoques = ["Métodos de plantación", "Animales silvestres", "Producción agrícola", "Pesticidas"];
  }

  getDatos(): void {

  }

  //Abrir modal, para insertar o para modificar.
  abrirModal(Asignacion: Asignacion) {
    const modalRef = this.modalService.open(InsertarComponent);
    modalRef.componentInstance.datosAsignacion = this.datosAsignacion;
    modalRef.componentInstance.asignacion = Asignacion;
  }


}
