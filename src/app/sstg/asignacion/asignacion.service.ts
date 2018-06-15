import { Injectable } from '@angular/core';
import { Asignacion } from './asignacion';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AsignacionService {

  constructor(private http: HttpClient) { }


  api: string = "http://172.24.176.145:3000/"

}
