import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';

import { HeroService } from '../hero.service';
import { CustomIconComponent, EIconVariants } from '@app/ui/custom-icon/custom-icon.component';
import { heroTexts } from '@app/lib/static-texts';
import { EEquipVariants } from '../hero.model';
import { DroppedItemComponent } from "@components/shared/dropped-items/dropped-item/dropped-item.component";
import type { TEquipment } from '@app/components/equipment/equipment.model';
import type { TToggleMenu } from '../hero.model';

@Component({
  selector: 'app-equipped-items',
  standalone: true,
  imports: [CustomIconComponent, DroppedItemComponent],
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

  private heroService: HeroService = inject(HeroService);
  private elementRef: ElementRef = inject(ElementRef);

  equippedItems = this.heroService.equippedItems;

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
    this.heroService.unEquipItem(equippedItem);
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.toggleMenu.update(() => ({
        [EEquipVariants.Armor]: false,
        [EEquipVariants.Weapon]: false,
      }));
    }
  }
}
