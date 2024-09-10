import { Component, EventEmitter, Input, Output, input } from '@angular/core';

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
  
  @Input() activeItem!: TEquipment;

  isHeroPage = input<boolean>(false);

  @Output() dropItem = new EventEmitter<TEquipment>();
  @Output() equipItem = new EventEmitter<TEquipment>();
  @Output() pickItem = new EventEmitter<TEquipment>();

  isOpen = input<boolean>();

  onPickItem() {
    this.pickItem.emit();
  }

  onEquipItem(): void {
    this.equipItem.emit(this.activeItem);
  }

  onDropItem(): void {
    this.dropItem.emit();
  }
}
