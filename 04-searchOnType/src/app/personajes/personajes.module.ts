import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorPersonajeComponent } from './pages/por-personaje/por-personaje.component';
import { PorUbicacionComponent } from './pages/por-ubicacion/por-ubicacion.component';
import { PorEpisodiosComponent } from './pages/por-episodios/por-episodios.component';
import { FormsModule } from '@angular/forms';
import { PersonajeTablaComponent } from './components/personaje-tabla/personaje-tabla.component';
import { PersonajeInputComponent } from './components/personaje-input/personaje-input.component';



@NgModule({
  declarations: [
    PorPersonajeComponent,
    PorUbicacionComponent,
    PorEpisodiosComponent,
    PersonajeTablaComponent,
    PersonajeInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
 
    PorPersonajeComponent,
    PorUbicacionComponent,
    PorEpisodiosComponent
  ]
})
export class PersonajesModule { }
