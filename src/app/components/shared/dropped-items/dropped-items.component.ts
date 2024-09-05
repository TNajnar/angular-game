import { Component, input } from '@angular/core';

import { DroppedItemComponent } from './dropped-item/dropped-item.component';
import type { TEquipment } from '@app/components/equipment/equipment.model';
import { droppedItemsTexts } from '@app/lib/static-texts';

@Component({
  selector: 'app-dropped-items',
  standalone: true,
  imports: [DroppedItemComponent],
  templateUrl: './dropped-items.component.html',
  styleUrl: './dropped-items.component.css'
})

export class DroppedItemsComponent {
  texts = droppedItemsTexts;

  droppedItems = input<TEquipment[] | undefined>();
}
