// File: src/app/components/pokemon-card/pokemon-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

export interface PokemonCardData {
  id: number;
  name: string;
  sprite?: string;
  types?: string[];
}

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() pokemon!: PokemonCardData;
  @Input() isFavorite = false;
}
