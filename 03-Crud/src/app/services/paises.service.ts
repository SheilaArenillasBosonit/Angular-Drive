import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  //Usaremos la Api del curso de udemy para mostrar los paises
  private _baseUrl: string= 'https://restcountries.com/v2'
 
  

  constructor( private http: HttpClient) { }

  buscarPaises(): Observable<Pais[]> {
    const url = `${this._baseUrl}/region/Europe`
    return this.http.get<Pais[]>(url)
  }

  
}
