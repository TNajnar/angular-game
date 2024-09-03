import { NgIf } from '@angular/common';
import { Component, input, signal } from '@angular/core';

import { droppedItemText } from '../fightTexts';
import type { TEquipment } from '@components/equipment/equipment.model';

@Component({
  selector: 'app-dropped-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dropped-item.component.html',
  styleUrl: './dropped-item.component.css'
})

export class DroppedItemComponent {
  droppedItemText = droppedItemText;
  droppedItem = input<TEquipment | null>();

  isHovered = signal<boolean>(false);

  isHoveredItem(value: boolean) {
    this.isHovered.set(value);
  }
}
