import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'hero-inventory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory.component.html',
})

export class InventoryComponent {
  inventory: string[] = Array.from({ length: 20 }, (_, index) => '');
}
