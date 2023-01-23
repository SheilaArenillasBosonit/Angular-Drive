import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  public emailPattern  : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  guardarContraseña(password: string, password2: string) {
    // a la hora de ejecutar esta funcion, vamos a regresar otra funcion

    // este control es un FormGroup con controls, errors, pristine, status, value, touched... se ejecuta cada vez que haces keyUp
    return (control: AbstractControl): ValidationErrors | null => {
 
      const contraseña = control.get(password)?.value;
      const contraseña2 = control.get(password2)?.value;

      
      if(contraseña !== contraseña2) {
        control.get(password2)?.setErrors({ notSamePassword: true});
        return { notSamePassword: true}
      }

     
      control.get(password2)?.setErrors(null)



      return null
    }
  }
}
