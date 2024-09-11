import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Output, input, signal } from '@angular/core';

import { TooltipComponent } from '@components/shared/tooltip/tooltip.component';
import type { TEquipment } from '@app/lib/types-model';


@Component({
  selector: 'app-equip-item',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, TooltipComponent],
  templateUrl: './equip-item.component.html',
})

export class EquipItemComponent {
  equipItem = input.required<TEquipment>();
  isMenuOpen = input<boolean>(false);

  @Output() handleOpenMenu = new EventEmitter();

  isHovered = signal<boolean>(false);

  isHoveredItem(value: boolean): void {
    this.isHovered.set(value);
  }
  
  handleMenu(): void {
    if (this.equipItem().id) {
      this.isHovered.set(false);
    }
    this.handleOpenMenu.emit(this.equipItem().id);
  }
}
