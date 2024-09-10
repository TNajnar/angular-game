import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Output, input, signal } from '@angular/core';

import { DroppedItemMenuComponent } from '../dropped-item-menu/dropped-item-menu.component';
import { TooltipComponent } from '@components/shared/tooltip/tooltip.component';
import type { TEquipment } from '@components/equipment/equipment.model';


@Component({
  selector: 'app-dropped-item',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, DroppedItemMenuComponent, TooltipComponent],
  templateUrl: './dropped-item.component.html',
})

export class DroppedItemComponent {
  droppedItem = input.required<TEquipment>();
  isMenuOpen = input<boolean>(false);

  @Output() handleOpenMenu = new EventEmitter();

  isHovered = signal<boolean>(false);

  isHoveredItem(value: boolean): void {
    this.isHovered.set(value);
  }
  
  handleMenu(): void {
    if (this.droppedItem().id) {
      this.isHovered.set(false);
    }
    this.handleOpenMenu.emit(this.droppedItem().id);
  }
}
