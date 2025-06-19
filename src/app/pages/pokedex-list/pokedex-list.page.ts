import { PokeApiService } from '../../services/poke-api.service';
import { PokemonSummary } from '../../models/pokemon.model';

export class PokedexListPage {
  pokemons: PokemonSummary[] = [];
  isLoading = false;
  limit = 20;
  offset = 0;

  constructor(private pokeApi: PokeApiService) {}

  ionViewWillEnter(): void {
    this.isLoading = true;
    this.pokeApi.getPokemons(this.limit, this.offset).subscribe({
      next: (resp) => {
        this.pokemons = resp.results;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        // TODO: exibir toas de erro
      },
    });
  }
}
