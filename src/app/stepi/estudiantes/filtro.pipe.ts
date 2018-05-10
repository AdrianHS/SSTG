import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  pure: false,
})
export class FiltroPipe implements PipeTransform {
  private
  transform(estudiantes: any, buscar: any, adicional: string): any {
    if (buscar === undefined) return estudiantes;
    return estudiantes.filter(function (usuario) {
      if (adicional === 'Carnet'.toString()) {
        return usuario.carnet.toLowerCase().includes(buscar.toLowerCase());
      } else if (adicional === 'Nombre'.toString()) {
        const nombre = usuario.nombre + ' ' + usuario.apellidos;
        return nombre.toLowerCase().includes(buscar.toLowerCase());
      } else if (adicional === 'Carrera'.toString()) {
        return usuario.carrera.toLowerCase().includes(buscar.toLowerCase());
      } else {
        return estudiantes;
      }
    })
  }

}
