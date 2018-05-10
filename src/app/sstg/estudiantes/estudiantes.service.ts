import { Injectable } from '@angular/core';
import { Estudiante } from './estudiantes';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class EstudiantesService {
  api: string = 'http://172.24.176.145:3000/';
  constructor(
    private http: HttpClient) { }

  consultarEstudiantes() {
    return this.http.get(this.api.concat('estudiantes'), { responseType: 'json' });
  }
  insertarEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.api.concat('crearEstudiante'), estudiante, { responseType: 'json' })
  }
  modificarEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.put<Estudiante>(this.api.concat('actualizarEstudiante'), estudiante, { responseType: 'json' })
  }
  borrarEstudiantes(cedula: string): Observable<{}> {
    return this.http.delete(this.api.concat('eliminarEstudiante/' + cedula))
  }
}