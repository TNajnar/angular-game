import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, inject, input, signal } from '@angular/core';

import { DroppedItemsService } from '../dropped-items.service';
import { HeroService } from '@app/components/hero/hero.service';
import { droppedItemTexts } from '@app/lib/static-texts';
import { DroppedItemMenuComponent } from '../dropped-item-menu/dropped-item-menu.component';
import type { TEquipment } from '@components/equipment/equipment.model';


@Component({
  selector: 'app-dropped-item',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, DroppedItemMenuComponent],
  templateUrl: './dropped-item.component.html',
  styleUrl: './dropped-item.component.css'
})

export class DroppedItemComponent {
  texts = droppedItemTexts;
  
  droppedItem = input<TEquipment | undefined>(undefined);
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
    this.heroService.pickEquip(this.droppedItem());
    this.droppedItemsService.dropItem(this.droppedItem());
    this.toggleMenu();
  }
  
  onDropItem(): void {
    if (this.isHeroPage()) {
      this.heroService.dropInventoryEquip(this.droppedItem());
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
