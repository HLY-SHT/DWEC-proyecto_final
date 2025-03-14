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
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    ListadoPeleasEventoComponent,
    ListadoPeleasAnioComponent,
    ListadoPeleasPeleadorComponent
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
