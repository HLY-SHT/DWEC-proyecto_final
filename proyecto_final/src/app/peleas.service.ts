import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Ipeleas } from './ipeleas'; // Asegúrate de que la interfaz esté bien definida

@Injectable({
  providedIn: 'root'
})
export class PeleasService {
  private BASE_URL = '/API';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene las peleas por año.
   */
  obtenerPeleasAño(apiKey: string, year: string): Observable<Ipeleas[]> {
    const url = `${this.BASE_URL}/${apiKey}/${year}/any/any`;
    return this.realizarPeticion(url);
  }

  /**
   * Obtiene las peleas por evento.
   */
  obtenerPeleasEvento(apiKey: string, event: string): Observable<Ipeleas[]> {
    const url = `${this.BASE_URL}/${apiKey}/any/${event}/any`;
    return this.realizarPeticion(url);
  }

  /**
   * Obtiene las peleas por peleador.
   */
  obtenerPeleasPeleador(apiKey: string, fighter: string): Observable<Ipeleas[]> {
    const url = `${this.BASE_URL}/${apiKey}/any/any/${fighter}`;
    return this.realizarPeticion(url);
  }

  /**
   * Método genérico para realizar la petición y limpiar la respuesta.
   */
  private realizarPeticion(url: string): Observable<Ipeleas[]> {
    return this.http.get(url, { responseType: 'text' }).pipe(
      map((response: string) => this.procesarRespuesta(response)),
      catchError((error) => {
        console.error('Error en la petición:', error);
        return throwError(() => new Error('Error al obtener las peleas'));
      })
    );
  }

  /**
   * Procesa la respuesta de la API eliminando cualquier contenido no JSON.
   */
  private procesarRespuesta(response: string): Ipeleas[] {
    const inicio = response.indexOf('[');
    const fin = response.lastIndexOf(']') + 1;

    if (inicio !== -1 && fin !== -1) {
      const jsonString = response.substring(inicio, fin);
      return JSON.parse(jsonString) as Ipeleas[];
    } else {
      throw new Error('Formato de respuesta inválido');
    }
  }
}
