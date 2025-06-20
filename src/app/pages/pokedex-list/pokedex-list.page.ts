// File: src/app/pages/pokedex-list/pokedex-list.page.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FavoritesService } from '../../services/favorites.service';
import { PokemonGridComponent } from '../../components/pokemon-grid/pokemon-grid.component';
import { NavigationControlsComponent } from '../../components/navigation-controls/navigation-controls.component';
import { FavoritesToggleComponent } from '../../components/favorites-toggle/favorites-toggle.component';

@Component({
  selector: 'app-pokedex-list',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PokemonGridComponent,
    NavigationControlsComponent,
    FavoritesToggleComponent,
  ],
  templateUrl: './pokedex-list.page.html',
  styleUrls: ['./pokedex-list.page.scss'],
})
export class PokedexListPage {
  currentPage = 1;
  searchTerm = '';
  showFavorites = false;
  favorites: number[] = [];
  totalPages = 150 / 4; // PokeAPI has 150 first-gen pokémon

  constructor(private favoritesService: FavoritesService) {
    this.favorites = this.favoritesService.getAll();
  }

  toggleFavorite(id: number): void {
    this.favoritesService.toggle(id);
    this.favorites = this.favoritesService.getAll();
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  toggleFavoritesView(): void {
    this.showFavorites = !this.showFavorites;
  }

  /**
   * Handler called by ion-searchbar (ionInput).
   * Updates seach term and resets to first page.
   */
  onSearchInput(event: CustomEvent<{ value: string }>): void {
    const value = event.detail?.value ?? '';
    this.searchTerm = value;
    this.currentPage = 1;
  }
}
