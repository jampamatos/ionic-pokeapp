// File: src/app/components/pokemon-card/pokemon-card.component.ts

import { Component, Input } from '@angular/core';
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
  imports: [IonicModule],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() pokemon!: PokemonCardData;
  @Input() isFavorite = false;
}
