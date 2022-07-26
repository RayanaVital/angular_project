import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
