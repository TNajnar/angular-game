import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { NgIf } from '@angular/common';

import { equipItemMenuTexts } from '@app/lib/static-texts';
import type { TEquipment } from '@app/components/equipment/equipment.model';

@Component({
  selector: 'app-equip-item-menu',
  standalone: true,
  imports: [NgIf],
  templateUrl: './equip-item-menu.component.html',
  styleUrl: './equip-item-menu.component.css'
})

export class EquipItemMenuComponent {
  texts = equipItemMenuTexts;
  
  @Input() activeItem!: TEquipment;

  isHeroPage = input<boolean>(false);
  isPotion = input<boolean>(false);

  @Output() drinkPotion = new EventEmitter<void>();
  @Output() dropItem = new EventEmitter<void>();
  @Output() equipItem = new EventEmitter<TEquipment>();
  @Output() pickItem = new EventEmitter<void>();

  isOpen = input<boolean>();

  onPickItem() {
    this.pickItem.emit();
  }

  onEquipItem(): void {
    this.equipItem.emit(this.activeItem);
  }

  onDrinkPotion(): void {
    this.drinkPotion.emit();
  }

  onDropItem(): void {
    this.dropItem.emit();
  }
}
