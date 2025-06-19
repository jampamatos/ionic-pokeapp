// File: src/app/components/navigation-controls/navigation-controls.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-navigation-controls',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './navigation-controls.component.html',
  styleUrls: ['./navigation-controls.component.scss'],
})
export class NavigationControlsComponent {
  @Input() page = 1;
  @Input() total = 1;
  @Output() pageChange = new EventEmitter<number>();

  next(): void {
    if (this.page < this.total) {
      this.pageChange.emit(this.page + 1);
    }
  }

  prev(): void {
    if (this.page > 1) {
      this.pageChange.emit(this.page - 1);
    }
  }
}
