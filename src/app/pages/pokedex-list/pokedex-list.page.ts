import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PokeApiService } from '../../services/poke-api.service';
import { PokemonSummary } from '../../models/pokemon.model';
import type { SearchbarCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-pokedex-list',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './pokedex-list.page.html',
  styleUrls: ['./pokedex-list.page.scss'],
})
export class PokedexListPage {
  pokemons: PokemonSummary[] = [];
  // complete copy to local filter
  allPokemons: PokemonSummary[] = [];
  isLoading = false;
  limit = 20;
  currentPage = 1;
  // Total pokemons returned by the API
  totalCount = 0;
  // Pagination control flags
  hasNext = false;
  hasPrevious = false;

  constructor(private pokeApi: PokeApiService) {}

  ionViewWillEnter(): void {
    this.loadPokemons();
  }

  /**
   * Load pokémons of current page.
   */
  loadPokemons(): void {
    this.isLoading = true;
    const offset = (this.currentPage - 1) * this.limit;
    this.pokeApi.getPokemons(this.limit, offset).subscribe({
      next: (resp) => {
        this.totalCount = resp.count;
        this.hasNext = !!resp.next;
        this.hasPrevious = !!resp.previous;
        this.allPokemons = resp.results;
        this.pokemons = [...this.allPokemons];
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        // TODO: show error toast
      },
    });
  }

  /**
   * Go to previous page of pokémons.
   */
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPokemons();
    }
  }

  /**
   * Go to next page of pokémons.
   */
  nextPage(): void {
    const maxPage = Math.ceil(this.totalCount / this.limit);
    if (this.currentPage < maxPage) {
      this.currentPage++;
      this.loadPokemons();
    }
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
