import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-inventory',
  standalone: true,
  imports: [NgFor],
  templateUrl: './inventory.component.html',
})

export class InventoryComponent {
  inventoryGrid: number[] = Array.from({ length: 20 }, (_, index) => index);

  heroService: HeroService = inject(HeroService);
}
