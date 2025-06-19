// FIle: src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokedex-list',
    pathMatch: 'full',
  },
  {
    path: 'pokedex-list',
    loadChildren: () =>
      import('./pages/pokedex-list/pokedex-list.module').then((m) => m.PokedexListPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
