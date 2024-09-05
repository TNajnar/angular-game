import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, inject, input, signal } from '@angular/core';

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

  droppedItem = input<TEquipment | undefined>();

  isHovered = signal<boolean>(false);
  isMenuOpen = signal<boolean>(false);

  elementRef: ElementRef = inject(ElementRef);
  heroService: HeroService = inject(HeroService);

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
    this.heroService.pickItem(this.droppedItem());
    this.toggleMenu();
  }

  onDropItem(): void {
    this.heroService.dropItem(this.droppedItem());
    this.toggleMenu();
  }
}
