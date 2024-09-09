import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';

import { HeroService } from '../hero.service';
import { CustomIconComponent, EIconVariants } from '@app/ui/custom-icon/custom-icon.component';
import { HERO_KEY } from '@app/lib/consts';
import type { TEquipment } from '@app/components/equipment/equipment.model';

type TEquipType = 'armor' | 'weapon';
type TToggleMenu = Record<TEquipType, boolean>;

@Component({
  selector: 'app-equipped-items',
  standalone: true,
  imports: [CustomIconComponent],
  templateUrl: './equipped-items.component.html',
  styleUrl: './equipped-items.component.css',
})
export class EquippedItemsComponent {
  toggleMenu = signal<TToggleMenu>({
    'armor': false,
    'weapon': false,
  });
  EIconVariants = EIconVariants;

  private heroService: HeroService = inject(HeroService);
  elementRef: ElementRef = inject(ElementRef);

  equippedItems = this.heroService.equippedItems;

  onClick(equipType: TEquipType): void {
    this.toggleMenu.update(prevState => ({
      ...prevState,
      [equipType]: !this.toggleMenu()[equipType],
    }));
  }

  isMenuOpen(equipType: TEquipType): boolean {
    return !this.toggleMenu()[equipType];
  }

  unEquip(equippedItem?: TEquipment): void {
    this.heroService.unEquipItem(equippedItem);
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.toggleMenu.update(() => ({
        'armor': false,
        'weapon': false,
      }));
    }
  }
}
