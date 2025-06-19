// File: src/app/pages/pokedex-list/pokedex-list.modules.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { PokedexListPage } from './pokedex-list.page';

const routes: Routes = [
  {
    path: '',
    component: PokedexListPage,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [PokedexListPage],
})
export class PokedexListPageModule {}
