import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Servicio del usuario
  private _baseUrl = 'http://localhost:3000/usuarios'

  constructor(
    private http: HttpClient
  ) { }

  insertarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this._baseUrl, usuario)


  }

  actualizarUsuario( id:number, usuario:Usuario){
    const url= `${this._baseUrl}/{id}`
    return this.http.put<Usuario>(url, usuario)
   
  }
  borrarUsuario( id: number){
    const url= `${this._baseUrl}/{id}`
    return this.http.delete<Usuario>(url)
   
  }

  buscarUsuarios(): Observable<Usuario[]>{
    
    return this.http.get<Usuario[]>(this._baseUrl)

  }

  // buscarUsuarioId(id: number):Observable<Usuario>{
  //   const url = `${this._baseUrl}/${id}`

  //   return this.http.get<Usuario>(url)
  // }
}
