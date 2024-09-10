import { Component, ElementRef, HostListener, inject, OnInit, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';

import { HeroService } from '../hero.service';
import { EquipItemComponent } from "@components/shared/equip-items/equip-item/equip-item.component";
import { EquipItemMenuComponent } from "@components/shared/equip-items/equip-item-menu/equip-item-menu.component";
import type { TEquipment } from '@app/components/equipment/equipment.model';

@Component({
  selector: 'hero-inventory',
  standalone: true,
  imports: [AsyncPipe, EquipItemComponent, EquipItemMenuComponent],
  templateUrl: './inventory.component.html',
})

export class InventoryComponent implements OnInit{
  activeMenuId = signal<number | undefined>(undefined);
  inventory$!: Observable<(TEquipment | null)[]>;

  private heroService: HeroService = inject(HeroService);
  private elementRef: ElementRef = inject(ElementRef);

  ngOnInit(): void {
    this.inventory$ = this.heroService.inventory$.pipe(
      map(inventory => Array.from({ length: 20 }, (_, index) => inventory[index] || null))
    );
  }

  handleActiveMenu(id?: number): void {
    this.activeMenuId.set(id);
  }

  onEquipItem(activeItem: TEquipment): void {
    this.heroService.equipItem(activeItem);
    this.handleActiveMenu(undefined);
  }

  // TODO logic for potion
  onDrinkPotion(): void {
    console.log('Drink potion');
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
