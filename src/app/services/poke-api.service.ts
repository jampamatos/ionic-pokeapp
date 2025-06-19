// File: src/app/services/poke-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PokemonListResponse } from '../models/pokemon.model';

const API_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  /**
   * Fetches a paginated list of Pokémon.
   * @param limit number of items per page
   * @param offset starting index
   */
  getPokemons(limit: number, offset: number): Observable<PokemonListResponse> {
    return this.http
      .get<PokemonListResponse>(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching Pokémon list:', error);
          return throwError(() => new Error('Failed to fetch Pokémon list'));
        })
      );
  }
}
