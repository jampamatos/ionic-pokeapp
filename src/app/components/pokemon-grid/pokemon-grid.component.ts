// File: src/app/components/pokemon-grid/pokemon-grid.component.ts
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PokeApiService } from '../../services/poke-api.service';
import { PokemonCardComponent, PokemonCardData } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-grid',
  standalone: true,
  imports: [CommonModule, IonicModule, PokemonCardComponent],
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss'],
})
export class PokemonGridComponent implements OnChanges {
  @Input() currentPage = 1;
  @Input() searchTerm = '';
  @Input() showFavorites = false;
  @Input() favorites: number[] = [];
  @Output() toggleFavorite = new EventEmitter<number>();

  pokemons: PokemonCardData[] = [];

  constructor(private api: PokeApiService) {}

  ngOnChanges(): void {
    this.loadPage();
  }

  loadPage(): void {
    const limit = 4;
    const offset = (this.currentPage - 1) * limit;
    this.api.getPokemons(limit, offset).subscribe({
      next: (resp) => {
        this.pokemons = [];
        resp.results.forEach((r) => {
          this.api.getPokemon(r.name).subscribe({
            next: (detail) => {
              const data = {
                id: detail.id,
                name: detail.name,
                sprite: detail.sprites.front_default,
                types: detail.types.map((t) => t.type.name),
              } as PokemonCardData;
              if (!this.showFavorites || this.favorites.includes(data.id)) {
                this.pokemons.push(data);
              }
            },
          });
        });
      },
      error: () => {
        this.pokemons = [];
      },
    });
  }
}
