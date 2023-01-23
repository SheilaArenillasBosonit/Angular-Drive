import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { Usuario, Pais } from '../../interfaces/interface';
import { UsuarioService } from '../../services/usuario.service';

import { emailPattern } from '../../services/email.service';
import { ValidatorService } from '../../services/validator.service';
import { finalize } from 'rxjs';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  
})
export class RegistroComponent implements OnInit {

  public paises : Pais[]=[] ;
  
  usuario: Usuario = {
    id: '',
    nombre: '',
    contraseña: '',
    contraseña2: '',
    email: '',
    ofertas: true,
    pais: {
      name: '',
      alpha3Code: '',
      independent: false
    },
    ciudad: ''
  }


  constructor( private fb: FormBuilder,
               private servicePaises: PaisesService,
              private usuarioService :UsuarioService,
             
              private validatorService: ValidatorService

  ) { }

  miFormulario : FormGroup= this.fb.group({
    id:[''],
    nombre:['',[Validators.required, Validators.minLength(4)]],
    contraseña:['', [Validators.required, Validators.minLength(5)]],
    contraseña2:['', [Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required, Validators.pattern( emailPattern )]],
    ofertas:[ false],
    pais:['', [Validators.required]],
    ciudad:['', [Validators.required]],
  },{
    validators: [this.validatorService.guardarContraseña('contraseña','contraseña2')]
  })

  ngOnInit(): void {

    this.servicePaises.buscarPaises().subscribe(
      (paises)=>this.paises= paises
    )
  // this.usuarioService.buscarUsuarios().subscribe(
  //   (usuarios)=>this.usuarios =usuarios
  // )
  
   }

   //Para Validar los campos
   campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched
  }

  // actualizarUsuario(){
  //   this.usuarioService.buscarUsuarios().subscribe(
  //     resp=>{
  //       this.usuarios = [...resp];
  //     }
  //   )
  // }

  guardar(){

    this.miFormulario.markAllAsTouched();
    
    const user: Usuario= this.miFormulario.value;
    this.usuarioService.insertarUsuario(user)
    .subscribe()
     
    // if( this.miFormulario.value.id === ''){

    //   this.formService.guardarUsuario(this.miFormulario.value)
    //   .pipe(
    //     finalize(()=> this.usuarioService.buscarUsuarios()
    //     .subscribe( resp=>{
    //       this.usuarios= [...resp];
    //     }
    //     ))
    //   )
    //   .subscribe(
    //     data=>{
    //       console.log( 'Post realizado', data)
    //     }
    //   )
    // } else{
    //   const i = this.miFormulario.value.id -1
    //   this.formService.actualizarUsuario(this.miFormulario.value.id, this.miFormulario.value)
    //   .pipe( finalize(()=> this.usuarioService.buscarUsuarios().subscribe(
    //     resp=>{
    //       this.usuarios= [...resp];

    //     }
    //   ))). subscribe(
    //     resp=> console.log(resp)
    //   )
    //   this.usuarios[i] = this.miFormulario.value
    // }

    this.miFormulario.reset({

      nombre: '',
      contraseña: '',
      contraseña2: '',
      email: '',
      ofertas: false,
      pais: '',
      ciudad:''

    })

  }

  editarUsuario( event:any){
    this.miFormulario.reset( event)
  }

}
