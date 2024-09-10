import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, inject, input, signal } from '@angular/core';

import { DroppedItemsService } from '../dropped-items.service';
import { HeroService } from '@app/components/hero/hero.service';
import { DroppedItemMenuComponent } from '../dropped-item-menu/dropped-item-menu.component';
import { TooltipComponent } from '@components/shared/tooltip/tooltip.component';
import { droppedItemTexts } from '@app/lib/static-texts';
import type { TEquipment } from '@components/equipment/equipment.model';


@Component({
  selector: 'app-dropped-item',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, DroppedItemMenuComponent, TooltipComponent],
  templateUrl: './dropped-item.component.html',
  styleUrl: './dropped-item.component.css'
})

export class DroppedItemComponent {
  texts = droppedItemTexts;
  
  droppedItem = input.required<TEquipment>();
  isHeroPage = input<boolean>(false);

  isHovered = signal<boolean>(false);
  isMenuOpen = signal<boolean>(false);

  elementRef: ElementRef = inject(ElementRef);
  heroService: HeroService = inject(HeroService);
  droppedItemsService: DroppedItemsService = inject(DroppedItemsService);

  isHoveredItem(value: boolean): void {
    this.isHovered.set(value);
  }

  toggleMenu(): void {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    
    if (this.isMenuOpen && !this.elementRef.nativeElement.contains(targetElement)) {
      this.isMenuOpen.set(false);
    }
  }

  onPickItem(): void {
    this.heroService.addToInventory(this.droppedItem());
    this.droppedItemsService.dropItem(this.droppedItem());
    this.toggleMenu();
  }
  
  onDropItem(): void {
    if (this.isHeroPage()) {
      this.heroService.removeFromInventory(this.droppedItem());
    } else {
      this.droppedItemsService.dropItem(this.droppedItem());
    }
    this.toggleMenu();
  }

  onEquipItem(): void {
    this.heroService.equipItem(this.droppedItem());
    this.toggleMenu();
  }
}
