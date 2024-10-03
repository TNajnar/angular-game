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

  private _heroService: HeroService = inject(HeroService);
  private _elementRef: ElementRef = inject(ElementRef);
  private _errorService: ErrorService = inject(ErrorService);

  ngOnInit(): void {
    this.inventory$ = this._heroService.inventory$.pipe(
      map(inventory => Array.from({ length: 20 }, (_, index) => inventory[index] || null))
    );
  }

  handleActiveMenu(id?: string): void {
    this.activeMenuId.set(id);
  }

  onEquipItem(activeItem: TEquipment): void {
    this._heroService.equipItem(activeItem);
    this.handleActiveMenu(undefined);
  }

  onDrinkPotion(activeItem: TEquipment): void {
    const { equippedArmor } = this._heroService.equippedItems();
    const maxHealth = BASE_HERO_HEALTH + (equippedArmor?.health ?? 0);

    if (maxHealth > this._heroService.heroGetter.health) {
      this._heroService.hero.health += activeItem.health ?? 0;
      this._heroService.removeFromInventory(activeItem);
      return;
    }
    this._errorService.showError('Hero has full health, you can`t drink the potion!')
  }

  onDropItem(inventoryItem: TEquipment): void {
    this._heroService.removeFromInventory(inventoryItem);
    this.handleActiveMenu(undefined);
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    
    if (this.activeMenuId && !this._elementRef.nativeElement.contains(targetElement)) {
      this.activeMenuId.set(undefined);
    }
  }
}
