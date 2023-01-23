import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



@NgModule({
  declarations: [
    RegistroComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    RegistroComponent,
    UsuariosComponent

  ]
})
export class ComponentsModule { }
