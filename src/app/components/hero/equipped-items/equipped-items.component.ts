import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';

import { HeroService } from '../hero.service';
import { EquipItemComponent } from '@app/components/shared/equip-items/equip-item/equip-item.component';
import { CustomIconComponent, EIconVariants } from '@app/ui/custom-icon/custom-icon.component';
import { heroTexts } from '@app/lib/static-texts';
import { EEquipVariants } from '../hero.model';
import type { TEquipment } from '@app/lib/types-model';
import type { TToggleMenu } from '../hero.model';

@Component({
  selector: 'app-equipped-items',
  standalone: true,
  imports: [CustomIconComponent, EquipItemComponent],
  templateUrl: './equipped-items.component.html',
  styleUrl: './equipped-items.component.css',
})
export class EquippedItemsComponent {
  texts = heroTexts;
  toggleMenu = signal<TToggleMenu>({
    [EEquipVariants.Armor]: false,
    [EEquipVariants.Weapon]: false,
  });
  EIconVariants = EIconVariants;
  EEquipVariants = EEquipVariants;

  private _heroService: HeroService = inject(HeroService);
  private _elementRef: ElementRef = inject(ElementRef);

  equippedItems = this._heroService.equippedItems;

  onClick(equipType: EEquipVariants): void {
    this.toggleMenu.update(prevState => ({
      ...prevState,
      [equipType]: !this.toggleMenu()[equipType],
    }));
  }

  isMenuOpen(equipType: EEquipVariants): boolean {
    return !this.toggleMenu()[equipType];
  }

  unEquip(equippedItem?: TEquipment): void {
    this._heroService.unEquipItem(equippedItem);
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

    if (!this._elementRef.nativeElement.contains(targetElement)) {
      this.toggleMenu.update(() => ({
        [EEquipVariants.Armor]: false,
        [EEquipVariants.Weapon]: false,
      }));
    }
  }
}
