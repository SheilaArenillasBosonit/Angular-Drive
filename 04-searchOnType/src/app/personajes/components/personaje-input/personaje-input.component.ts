import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime,  Subject } from 'rxjs';

@Component({
  selector: 'app-personaje-input',
  templateUrl: './personaje-input.component.html',
 
})
export class PersonajeInputComponent implements OnInit {
  @Output() onEnter: EventEmitter <string> = new EventEmitter();
  @Output () onDebounce : EventEmitter <string> = new EventEmitter();

  debouncer: Subject<string>= new Subject();

  termino: string='';

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
    
  }

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(200)
    )
    .subscribe(valor=>{
     this.onDebounce.emit(valor);
    })
  }

}
