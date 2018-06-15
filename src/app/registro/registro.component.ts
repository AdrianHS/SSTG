import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  rol: string;
  roles: string[] = ["profesor", "estudiante"];

  constructor() { }

  ngOnInit() {
  }

}
