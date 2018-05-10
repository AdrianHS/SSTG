import { Injectable } from '@angular/core';
import { Profesor } from './profesores';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProfesoresService {

  constructor(private http: HttpClient) { }


  api: string = "http://192.168.1.83:3000/"

  consultarProfesores() {
    return this.http.get(this.api.concat('profesores'), { responseType: 'json' })
  }

  insertarProfesor(profesor: Profesor) {
    return this.http.post<Profesor>(this.api.concat('crearProfesor'), profesor, { responseType: 'json' })
  }

  modificarProfesor(profesor: Profesor): Observable<Profesor> {
    return this.http.put<Profesor>(this.api.concat('actualizarProfesor'), profesor, { responseType: 'json' })
  }

  borrarProfesor(profesor: Profesor): Observable<{}> {
    return this.http.delete(this.api.concat('eliminarProfesor/' + profesor.cedula), { responseType: 'text' })
  }

}
