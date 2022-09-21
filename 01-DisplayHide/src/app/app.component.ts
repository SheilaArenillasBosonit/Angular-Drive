import { Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isShow: boolean =false;

  toggleShow(){
    this.isShow= !this.isShow;
  }

 
}
