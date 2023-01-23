import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { Result, RickAndMorty } from '../../interfaces/personaje-interface';

@Component({
  selector: 'app-por-personaje',
  templateUrl: './por-personaje.component.html',

})
export class PorPersonajeComponent implements OnInit {
  termino: string= '';
  hayError: boolean=false;
  personajes!: Result[]
  paisesSugeridos   : Result[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private personajeService: PersonajeService) { }

  buscar(termino : string){
    this.hayError=false;
    this.termino= termino;
    console.log(this.termino);

    this.personajeService.buscarPersonaje(termino)
    .subscribe((respuesta: RickAndMorty)=>{
      console.log(respuesta);

      this.personajes = respuesta.results
      

    }
    //  (err)=>{
    //  this.hayError=true;
    // })

    )
  }

  sugerencias(termino: string){
    this.hayError= false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.personajeService.buscarPersonaje(termino)
    .subscribe(
     
    )
  }

  ngOnInit(): void {
  }

}
