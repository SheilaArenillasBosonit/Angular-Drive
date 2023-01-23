import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result, RickAndMorty } from '../interfaces/personaje-interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
 private apiUrl = 'https://rickandmortyapi.com/api'; //character/?name=rick&status=alive
  constructor( private http : HttpClient){}

  buscarPersonaje( termino: string): Observable<RickAndMorty>{
    const url =` ${this.apiUrl}/character/?name=${termino}`

    return this.http.get<RickAndMorty>(url);
  }










  buscarUbicacion( termino: string): Observable<RickAndMorty>{
    const url =` ${this.apiUrl}/location/?${termino}`

    return this.http.get<RickAndMorty>(url);
  }
  buscarEpisodio( termino: string): Observable<RickAndMorty>{
    const url =` ${this.apiUrl}/episode/?${termino}`

    return this.http.get<RickAndMorty>(url);
  }
  }


