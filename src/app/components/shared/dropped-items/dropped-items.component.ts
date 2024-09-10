import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { DroppedItemsService } from './dropped-items.service';
import { DroppedItemComponent } from './dropped-item/dropped-item.component';
import { droppedItemsTexts } from '@app/lib/static-texts';
import { DroppedItemMenuComponent } from "./dropped-item-menu/dropped-item-menu.component";
import { HeroService } from '@app/components/hero/hero.service';
import type { TEquipment } from '@app/components/equipment/equipment.model';

@Component({
  selector: 'app-dropped-items',
  standalone: true,
  imports: [AsyncPipe, DroppedItemComponent, DroppedItemMenuComponent],
  templateUrl: './dropped-items.component.html',
  styleUrl: './dropped-items.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DroppedItemsComponent {
  texts = droppedItemsTexts;

  activeMenuId = signal<number | undefined>(undefined);
  
  private elementRef: ElementRef = inject(ElementRef);
  private heroService: HeroService = inject(HeroService);
  private droppedItemsService: DroppedItemsService = inject(DroppedItemsService);

  droppedItems = this.droppedItemsService.allDroppedItems;

  handleOpenMenu(activeMenuId?: number): void {
    this.activeMenuId.set(activeMenuId);
  }

  onPickItem(droppedItem: TEquipment): void {
    this.heroService.addToInventory(droppedItem);
    this.droppedItemsService.dropItem(droppedItem);
    this.handleOpenMenu(undefined);
  }
  
  onDropItem(droppedItem: TEquipment): void {
    this.droppedItemsService.dropItem(droppedItem);
    this.handleOpenMenu(undefined);
  }

  onEquipItem(droppedItem: TEquipment): void {
    this.heroService.equipItem(droppedItem);
    this.handleOpenMenu(undefined);
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    
    if (this.activeMenuId && !this.elementRef.nativeElement.contains(targetElement)) {
      this.activeMenuId.set(undefined);
    }
  }
}
