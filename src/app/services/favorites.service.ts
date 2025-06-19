import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private key = 'favorites';

  getAll(): number[] {
    const raw = localStorage.getItem(this.key);
    return raw ? JSON.parse(raw) : [];
  }

  toggle(id: number): void {
    const favs = this.getAll();
    const index = favs.indexOf(id);
    if (index >= 0) {
      favs.splice(index, 1);
    } else {
      favs.push(id);
    }
    localStorage.setItem(this.key, JSON.stringify(favs));
  }
}
