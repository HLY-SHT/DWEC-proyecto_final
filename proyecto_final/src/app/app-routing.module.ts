import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListadoPeleasAnioComponent } from './listado-peleas-anio/listado-peleas-anio.component';
import { ListadoPeleasEventoComponent } from './listado-peleas-evento/listado-peleas-evento.component';
import { ListadoPeleasPeleadorComponent } from './listado-peleas-peleador/listado-peleas-peleador.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'listadoaño', component:ListadoPeleasAnioComponent},
  {path:'listadoevento', component:ListadoPeleasEventoComponent},
  {path:'listadopeleador', component:ListadoPeleasPeleadorComponent},
  {path:'**', component:Pagina404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
