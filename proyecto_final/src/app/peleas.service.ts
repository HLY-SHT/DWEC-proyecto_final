import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipeleas } from './ipeleas'; // Asegúrate de tener definida esta interfaz en el archivo correspondiente

const BASE_URL = 'https://fightingtomatoes.com/API';

@Injectable({
  providedIn: 'root'
})
export class PeleasService {
  constructor(private http: HttpClient) {}

  /**
   * Obtiene las peleas por año.
   * Utiliza 'any' para los parámetros de evento y peleador.
   * Ejemplo de URL: https://fightingtomatoes.com/API/{api-key}/{year}/any/any
   */
  obtenerPeleasAño(apiKey: string, year: string): Observable<Ipeleas[]> {
    const url = `${BASE_URL}/${apiKey}/${year}/any/any`;
    return this.http.get<Ipeleas[]>(url);
  }

  /**
   * Obtiene las peleas por evento.
   * Utiliza 'any' para los parámetros de año y peleador.
   * Ejemplo de URL: https://fightingtomatoes.com/API/{api-key}/any/{event}/any
   */
  obtenerPeleasEvento(apiKey: string, event: string): Observable<Ipeleas[]> {
    const url = `${BASE_URL}/${apiKey}/any/${event}/any`;
    return this.http.get<Ipeleas[]>(url);
  }

  /**
   * Obtiene las peleas por peleador.
   * Utiliza 'any' para los parámetros de año y evento.
   * Ejemplo de URL: https://fightingtomatoes.com/API/{api-key}/any/any/{fighter}
   */
  obtenerPeleasPeleador(apiKey: string, fighter: string): Observable<Ipeleas[]> {
    const url = `${BASE_URL}/${apiKey}/any/any/${fighter}`;
    return this.http.get<Ipeleas[]>(url);
  }
}
