import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})

export class FiltroPipe implements PipeTransform {

  transform(profesores: any, buscar: any, adicional: string): any {
    if (buscar === undefined) return profesores;
    return profesores.filter(function (profesores) {
      if (adicional === 'Cedula'.toString()) {
        return profesores.cedula.toLowerCase().includes(buscar.toLowerCase());
      }
      else if (adicional === 'Nombre'.toString()) {
        return profesores.nombre.toLowerCase().includes(buscar.toLowerCase());
      }
      else if (adicional === 'Apellidos'.toString()) {
        return profesores.apellidos.toLowerCase().includes(buscar.toLowerCase());
      }
      else if (adicional === 'Telefono'.toString()) {
        return profesores.telefono.toLowerCase().includes(buscar.toLowerCase());
      }
      else if (adicional === 'Email'.toString()) {
        return profesores.email.toLowerCase().includes(buscar.toLowerCase());
      }
      else {
        return profesores;
      }
    })
  }
}
