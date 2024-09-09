import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';

import { HeroService } from '../hero.service';
import { DroppedItemComponent } from '@app/components/shared/dropped-items/dropped-item/dropped-item.component';
import type { TEquipment } from '@app/components/equipment/equipment.model';

@Component({
  selector: 'hero-inventory',
  standalone: true,
  imports: [AsyncPipe, DroppedItemComponent],
  templateUrl: './inventory.component.html',
})

export class InventoryComponent implements OnInit{
  inventory$!: Observable<(TEquipment | null)[]>;

  private heroService: HeroService = inject(HeroService);

  ngOnInit(): void {
    this.inventory$ = this.heroService.inventory$.pipe(
      map(inventory => Array.from({ length: 20 }, (_, index) => inventory[index] || null))
    );
  }
}
