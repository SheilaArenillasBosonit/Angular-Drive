import { Component, OnInit } from '@angular/core';
import { Result, RickAndMorty } from '../../interfaces/personaje-interface';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-por-episodios',
  templateUrl: './por-episodios.component.html',
 
})
export class PorEpisodiosComponent  {
  termino: string= '';
  hayError: boolean=false;
  personajes: Result[]=[];
  paisesSugeridos   : Result[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private personajeService: PersonajeService) { }
  buscar(termino : string){
    this.hayError=false;
    this.termino= termino;
    console.log(this.termino);

    this.personajeService.buscarEpisodio(termino)
    .subscribe((respuesta: RickAndMorty)=>{
      console.log(respuesta);

      this.personajes = respuesta.results
      

    }
    //  (err)=>{
    //  this.hayError=true;
    // })

    )
  }

  }

  
