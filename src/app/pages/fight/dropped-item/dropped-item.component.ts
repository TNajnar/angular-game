import { NgIf } from '@angular/common';
import { Component, ElementRef, HostListener, inject, input, signal } from '@angular/core';

import { DroppedItemMenuComponent } from '../dropped-item-menu/dropped-item-menu.component';
import { droppedItemText } from '@app/lib/static-texts';
import type { TEquipment } from '@components/equipment/equipment.model';

import equipment from '@components/equipment/equipment-data';
import { HeroService } from '@app/components/hero/hero.service';

@Component({
  selector: 'app-dropped-item',
  standalone: true,
  imports: [NgIf, DroppedItemMenuComponent],
  templateUrl: './dropped-item.component.html',
  styleUrl: './dropped-item.component.css'
})

export class DroppedItemComponent {
  droppedItemText = droppedItemText;

  droppedItem = input<TEquipment| undefined>(equipment[0]);

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
  }

  onDropItem(): void {
    this.heroService.dropItem(this.droppedItem());
  }
}
