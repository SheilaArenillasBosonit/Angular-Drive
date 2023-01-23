import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { ComparadorComponent } from './graficas/components/comparador/comparador.component';
import { LineaComponent } from './graficas/components/linea/linea.component';
import { BarrasComponent } from './graficas/components/barras/barras.component';

@NgModule({
  declarations: [
    AppComponent,
    BarrasComponent,
    ComparadorComponent,
    LineaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
