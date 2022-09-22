import { Component, Input, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  
})
export class PadreComponent implements OnInit {
 
//Prueba
@ViewChild(HijoComponent) hijo!: HijoComponent;

EjecularEventoService() {
  this.hijo.mensaje('Use Service del padre')
}
EjecularEventoInput(){
  this.hijo.mensaje('Use Input property del padre')
}
EjecularEventoObservable(){
  this.hijo.mensaje('Use Observable del padre')
}


//Mensaje del componente hijo

mensajePadre!:string;

  getMensaje(e :any){
    console.log(e)
    this.mensajePadre=e
  }


  constructor() { }

  ngOnInit(): void {
  }

}
