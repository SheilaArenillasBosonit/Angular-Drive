import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles:[
  ]
   
  
 
})
export class HijoComponent implements OnInit {
//Mensajes del hijo que queremos que se muestre en el componente padre
mensajeService="Use Service del hijo";
mensajeOutput="Use Output property del hijo";
mensajeObservable="Use Observable del hijo";



@Output()miEvento= new EventEmitter<string>();

//Eventos del texto del componente hijo
ejecutarEventoService(){
  this.miEvento.emit(this.mensajeService);
  
}
ejecutarEventoOutput(){
  
  this.miEvento.emit(this.mensajeOutput);
}

ejecutarEventoObservable(){
  
  this.miEvento.emit(this.mensajeObservable);
}


//Mensaje del componente Padre
mensajeHijo:string=''

mensaje(value:string){
  this.mensajeHijo=value;
}

  constructor() { }

  ngOnInit(): void {
  }

}
