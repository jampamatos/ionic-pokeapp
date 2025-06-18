// File: src/app/models/pokemon.model.ts

/**
 * Represents a summary of a Pokémon returned by the list endpoint.
 */
export interface PokemonSummary {
  name: string;
  url: string;
}

/**
 * Represents the response from the PokeAPI for listing Pokémon.
 */
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSummary[];
}
