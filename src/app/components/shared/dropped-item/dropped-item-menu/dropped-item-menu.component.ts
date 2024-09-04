import { Component, EventEmitter, Output, input } from '@angular/core';

import { TEquipment } from '@app/components/equipment/equipment.model';
import { droppedItemMenuTexts } from '@app/lib/static-texts';

@Component({
  selector: 'app-dropped-item-menu',
  standalone: true,
  templateUrl: './dropped-item-menu.component.html',
  styleUrl: './dropped-item-menu.component.css'
})

export class DroppedItemMenuComponent {
  texts = droppedItemMenuTexts;

  @Output() pickItem = new EventEmitter<TEquipment>();
  @Output() dropItem = new EventEmitter<TEquipment>();

  isOpen = input.required<boolean>();

  onPickItem() {
    this.pickItem.emit();
  }

  onDropItem(): void {
    this.dropItem.emit();
  }
}
