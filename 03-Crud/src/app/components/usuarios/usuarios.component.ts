import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UsuarioService } from '../../services/usuario.service';

import { finalize } from 'rxjs';
import { Usuario } from 'src/app/interfaces/interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles:[
    `
    th{
      padding-left: 15px;
      padding-right: 15px;
      margin-top: 10px;
     
     
      
    }
    
    `
  ]
  
})
export class UsuariosComponent implements OnInit {
  

 usuarios: Usuario[]=[];

  @Output() editarUsuario= new EventEmitter<any>()

  constructor(
    private usuarioService:UsuarioService,
   
    private paisService: PaisesService
  ) { }

  ngOnInit(): void {
   
    this.usuarioService.buscarUsuarios()
    .subscribe(usuarios=>{
        this.usuarios=usuarios;
        console.log(usuarios)
    });
    

  }


  // buscarUsuario(id:number){
  //   this.usuarioService.buscarUsuarioId(id).subscribe(
  //     (usuarios)=> this.editarUsuario.emit(usuarios)
  //   )
  // }

  eliminarUsuario(id:number){

    this.usuarioService.borrarUsuario(id)
    .pipe(
      finalize(()=>this.usuarioService.buscarUsuarios()
      .subscribe( resp=>{
       
      }))
    )
    .subscribe(
      resp=> console.log(resp)
    )
  }

}
