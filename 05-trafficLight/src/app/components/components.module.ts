import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlesComponent } from './controles/controles.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ControlesComponent,
    SemaforoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ControlesComponent,
    SemaforoComponent
    
  ]
})
export class ComponentsModule { }
