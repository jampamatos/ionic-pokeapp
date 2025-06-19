// File: src/app/components/favorites-toggle/favorites-toggle.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-favorites-toggle',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './favorites-toggle.component.html',
  styleUrls: ['./favorites-toggle.component.scss'],
})
export class FavoritesToggleComponent {
  @Input() show = false;
  @Input() count = 0;
  @Output() toggle = new EventEmitter<void>();
}
