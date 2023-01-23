import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPersonajeComponent } from './personajes/pages/por-personaje/por-personaje.component';
import { PorUbicacionComponent } from './personajes/pages/por-ubicacion/por-ubicacion.component';
import { PorEpisodiosComponent } from './personajes/pages/por-episodios/por-episodios.component';

const routes: Routes = [
  {
    path:'',
    component: PorPersonajeComponent,
    pathMatch: 'full'
  },
  {
    path:'ubicacion',
    component: PorUbicacionComponent
  },
  {
    path:'episodios',
    component: PorEpisodiosComponent
  },
  {
    path:'**',
    redirectTo: ''
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
