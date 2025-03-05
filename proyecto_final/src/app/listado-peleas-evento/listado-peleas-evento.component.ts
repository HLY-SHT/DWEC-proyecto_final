import { Component } from '@angular/core';
import { PeleasService } from '../peleas.service';
import { Ipeleas } from '../ipeleas';

@Component({
  selector: 'app-listado-peleas-evento',
  standalone: true,
  templateUrl: './listado-peleas-evento.component.html',
  styleUrls: ['./listado-peleas-evento.component.css']
})
export class ListadoPeleasEventoComponent {
  apiKey: string = 'f579b1be4876950dbca83c4b18b4ff90d9bc2507'; // Reemplaza con tu API key
  evento: string = '';
  peleas: Ipeleas[] = [];

  constructor(private peleasService: PeleasService) {}

  buscarPorEvento() {
    if (!this.evento.trim()) {
      alert('Por favor, ingresa un evento válido.');
      return;
    }

    this.peleasService.obtenerPeleasEvento(this.apiKey, this.evento).subscribe(
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
