import { Component } from '@angular/core';
import { PeleasService } from '../peleas.service';
import { Ipeleas } from '../ipeleas';

@Component({
  selector: 'app-listado-peleas-anio',
  templateUrl: './listado-peleas-anio.component.html',
  styleUrls: ['./listado-peleas-anio.component.css']
})
export class ListadoPeleasAnioComponent {
  apiKey: string = 'TU_API_KEY'; // Reemplaza con tu API key
  anio: string = '';
  peleas: Ipeleas[] = [];

  constructor(private peleasService: PeleasService) {}

  buscarPorAnio() {
    if (!this.anio.trim()) {
      alert('Por favor, ingresa un año válido.');
      return;
    }

    this.peleasService.obtenerPeleasAño(this.apiKey, this.anio).subscribe(
      (data) => {
        this.peleas = data;
      },
      (error) => {
        console.error('Error obteniendo peleas:', error);
        alert('Hubo un error al obtener los datos.');
      }
    );
  }
}
