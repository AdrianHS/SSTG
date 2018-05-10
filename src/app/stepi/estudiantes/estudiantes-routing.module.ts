import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudiantesComponent } from './estudiantes.component';
import { ConsultarComponent } from './consultar/consultar.component';
const routes: Routes = [{
    path: '',
    component: EstudiantesComponent,
    children: [
        {
            path: 'consultar',
            component: ConsultarComponent,
        },
        // Add the next components here
    ],
},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EstudiantesRoutingModule { }

