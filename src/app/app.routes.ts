import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'pokedex-list',
    loadComponent: () =>
      import('./pages/pokedex-list/pokedex-list.page').then((m) => m.PokedexListPage),
  },
];
