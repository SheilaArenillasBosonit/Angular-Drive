import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  
})
export class ControlesComponent implements OnInit {

  miFormulario: FormGroup= this.fb.group({
    select:['3'],
    mode:[false]
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
