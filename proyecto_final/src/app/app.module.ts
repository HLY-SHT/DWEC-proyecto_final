import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { ListadoPeleasEventoComponent } from './listado-peleas-evento/listado-peleas-evento.component';
import { ListadoPeleasAnioComponent } from './listado-peleas-anio/listado-peleas-anio.component';
import { ListadoPeleasPeleadorComponent } from './listado-peleas-peleador/listado-peleas-peleador.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pagina404Component,
    ListadoPeleasEventoComponent,
    ListadoPeleasAnioComponent,
    ListadoPeleasPeleadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
