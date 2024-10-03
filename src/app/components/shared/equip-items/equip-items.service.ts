import { Injectable, signal } from '@angular/core';

import { generateId } from '@app/lib/utils';
import equipment from '@app/lib/equipment-data';
import type { TEquipment } from '@app/lib/types-model';

@Injectable({
  providedIn: 'root'
})

export class EquipItemsService {
  private _droppedItems = signal<TEquipment[] | undefined>(undefined);

  allDroppedItems = this._droppedItems.asReadonly();

  appendRandomEquipment(number1: number, number2: number): void {
    const firstItem = { ...equipment[number1], id: generateId() };
    const secondItem = { ...equipment[number2], id: generateId() };

    this._droppedItems.update((prevState) => [
      ...prevState || [], firstItem, secondItem,
    ]);
  }

  dropItem(removedEquip?: TEquipment): void {
    const filterEquip = this._droppedItems()?.filter(item => item.id !== removedEquip?.id);
    this._droppedItems.set(filterEquip);
  }
}
