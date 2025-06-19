import { PokeApiService } from '../../services/poke-api.service';
import { PokemonSummary } from '../../models/pokemon.model';
import type { SearchbarCustomEvent } from '@ionic/angular';

export class PokedexListPage {
  pokemons: PokemonSummary[] = [];
  // complete copy to local filter
  allPokemons: PokemonSummary[] = [];
  isLoading = false;
  limit = 20;
  offset = 0;

  constructor(private pokeApi: PokeApiService) {}

  ionViewWillEnter(): void {
    this.isLoading = true;
    this.pokeApi.getPokemons(this.limit, this.offset).subscribe({
      next: (resp) => {
        // Store the complete list for filtering
        this.allPokemons = resp.results;
        this.pokemons = [...this.allPokemons];
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        // TODO: exibir toas de erro
      },
    });
  }

  /**
   * Filter the list of pokemons based on the search term.
   */
  onSearchChange(event: SearchbarCustomEvent): void {
    const filter = event.detail.value?.trim().toLowerCase() ?? '';
    this.pokemons = filter
      ? this.allPokemons.filter((p) => p.name.toLowerCase().includes(filter))
      : [...this.allPokemons];
  }
}
