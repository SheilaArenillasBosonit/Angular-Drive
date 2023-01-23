import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/personaje-interface';

@Component({
  selector: 'app-personaje-tabla',
  templateUrl: './personaje-tabla.component.html',
 
})
export class PersonajeTablaComponent implements OnInit {

  @Input() personajes!: Result[]

  constructor() { }

  ngOnInit(): void {
  }

}
