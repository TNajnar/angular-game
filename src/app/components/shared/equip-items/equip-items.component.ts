import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

import { HeroService } from '@app/components/hero/hero.service';
import { MonsterService } from '@app/components/monster/monster.service';
import { EquipItemsService } from './equip-items.service';
import { EquipItemComponent } from './equip-item/equip-item.component';
import { EquipItemMenuComponent } from './equip-item-menu/equip-item-menu.component';
import { equipItemsTexts } from '@app/lib/static-texts';
import type { TEquipment } from '@app/lib/types-model';
import type { TMonster } from '@app/pages/monsters/monster.model';

@Component({
  selector: 'app-equip-items',
  standalone: true,
  imports: [AsyncPipe, NgIf, EquipItemComponent, EquipItemMenuComponent],
  templateUrl: './equip-items.component.html',
  styleUrl: './equip-items.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EquipItemsComponent {
  texts = equipItemsTexts;

  activeMenuId = signal<string | undefined>(undefined);
  
  private _elementRef: ElementRef = inject(ElementRef);
  private _heroService: HeroService = inject(HeroService);
  private _monsterService: MonsterService = inject(MonsterService);
  private _equipItemsService: EquipItemsService = inject(EquipItemsService);

  droppedItems = this._equipItemsService.allDroppedItems;

  get monster(): TMonster {
    return this._monsterService.fightedMonsterUnit;
  }

  handleOpenMenu(activeMenuId?: string): void {
    this.activeMenuId.set(activeMenuId);
  }

  onPickItem(droppedItem: TEquipment): void {
    this._heroService.addToInventory(droppedItem);
    this._equipItemsService.dropItem(droppedItem);
    this.handleOpenMenu(undefined);
  }
  
  onDropItem(droppedItem: TEquipment): void {
    this._equipItemsService.dropItem(droppedItem);
    this.handleOpenMenu(undefined);
  }

  onEquipItem(droppedItem: TEquipment): void {
    this._heroService.equipItem(droppedItem);
    this.handleOpenMenu(undefined);
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    
    if (this.activeMenuId && !this._elementRef.nativeElement.contains(targetElement)) {
      this.activeMenuId.set(undefined);
    }
  }
}
