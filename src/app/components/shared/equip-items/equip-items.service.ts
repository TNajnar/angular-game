import { Injectable, signal } from '@angular/core';

import { generateId } from '@app/lib/utils';
import equipment from '@app/lib/equipment-data';
import type { TEquipment } from '@app/lib/types-model';

@Injectable({
  providedIn: 'root'
})

export class EquipItemsService {
  private droppedItems = signal<TEquipment[] | undefined>(undefined);

  allDroppedItems = this.droppedItems.asReadonly();

  appendRandomEquipment(number1: number, number2: number): void {
    const firstItem = { ...equipment[number1], id: generateId() };
    const secondItem = { ...equipment[number2], id: generateId() };

    this.droppedItems.update((prevState) => [
      ...prevState || [], firstItem, secondItem,
    ]);
  }

  dropItem(removedEquip?: TEquipment): void {
    const filterEquip = this.droppedItems()?.filter(item => item.id !== removedEquip?.id);
    this.droppedItems.set(filterEquip);
  }
}
