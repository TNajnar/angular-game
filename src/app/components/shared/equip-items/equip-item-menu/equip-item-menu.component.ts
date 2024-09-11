import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { NgIf } from '@angular/common';

import { equipItemMenuTexts } from '@app/lib/static-texts';
import type { TEquipment } from '@app/lib/types-model';

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

  @Output() drinkPotion = new EventEmitter<TEquipment>();
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

  onDrinkPotion(): void {
    this.drinkPotion.emit(this.activeItem);
  }

  onDropItem(): void {
    this.dropItem.emit(this.activeItem);
  }
}
