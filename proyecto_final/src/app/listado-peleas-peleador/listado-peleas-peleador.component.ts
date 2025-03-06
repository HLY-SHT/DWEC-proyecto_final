import { Component } from '@angular/core';
import { PeleasService } from '../peleas.service';
import { Ipeleas } from '../ipeleas';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Agregar esto

@Component({
  selector: 'app-listado-peleas-peleador',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Agregar FormsModule aquí
  templateUrl: './listado-peleas-peleador.component.html',
  styleUrls: ['./listado-peleas-peleador.component.css']
})
export class ListadoPeleasPeleadorComponent {
  apiKey: string = 'f579b1be4876950dbca83c4b18b4ff90d9bc2507'; // Reemplaza con tu API key
  peleador: string = '';
  peleas: Ipeleas[] = [];

  constructor(private peleasService: PeleasService) {}

  buscarPorPeleador() {
    if (!this.peleador.trim()) {
      alert('Por favor, ingresa un nombre de peleador válido.');
      return;
    }

    this.peleasService.obtenerPeleasPeleador(this.apiKey, this.peleador).subscribe(
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
