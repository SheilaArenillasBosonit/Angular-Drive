import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraficaService {

  constructor(private http: HttpClient) { }

  getDataHP(){
    return this.http.get<any>('http://localhost:3000/personajes');

  }
}
