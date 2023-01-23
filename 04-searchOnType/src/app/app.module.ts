import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PersonajesModule } from './personajes/personajes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PersonajesModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
