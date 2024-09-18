import { Component, ElementRef, HostListener, inject, OnInit, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';

import { HeroService } from '../hero.service';
import { ErrorService } from '@app/components/shared/error.service';
import { EquipItemComponent } from "@components/shared/equip-items/equip-item/equip-item.component";
import { EquipItemMenuComponent } from "@components/shared/equip-items/equip-item-menu/equip-item-menu.component";
import { BASE_HERO_HEALTH } from '@app/lib/consts';
import type { TEquipment } from '@app/lib/types-model';

@Component({
  selector: 'hero-inventory',
  standalone: true,
  imports: [AsyncPipe, EquipItemComponent, EquipItemMenuComponent],
  templateUrl: './inventory.component.html',
})

export class InventoryComponent implements OnInit{
  activeMenuId = signal<string | undefined>(undefined);
  inventory$!: Observable<(TEquipment | null)[]>;

  private heroService: HeroService = inject(HeroService);
  private elementRef: ElementRef = inject(ElementRef);
  private errorService: ErrorService = inject(ErrorService);

  ngOnInit(): void {
    this.inventory$ = this.heroService.inventory$.pipe(
      map(inventory => Array.from({ length: 20 }, (_, index) => inventory[index] || null))
    );
  }

  handleActiveMenu(id?: string): void {
    this.activeMenuId.set(id);
  }

  onEquipItem(activeItem: TEquipment): void {
    this.heroService.equipItem(activeItem);
    this.handleActiveMenu(undefined);
  }

  onDrinkPotion(activeItem: TEquipment): void {
    const { equippedArmor } = this.heroService.equippedItems();
    const maxHealth = BASE_HERO_HEALTH + (equippedArmor?.health ?? 0);

    if (maxHealth > this.heroService.heroGetter.health) {
      this.heroService.hero.health += activeItem.health ?? 0;
      this.heroService.removeFromInventory(activeItem);
      return;
    }
    this.errorService.showError('Hero has full health, you can`t drink the potion!')
  }

  onDropItem(inventoryItem: TEquipment): void {
    this.heroService.removeFromInventory(inventoryItem);
    this.handleActiveMenu(undefined);
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    
    if (this.activeMenuId && !this.elementRef.nativeElement.contains(targetElement)) {
      this.activeMenuId.set(undefined);
    }
  }
}
