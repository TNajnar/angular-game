import { Injectable } from '@angular/core';

import { staticMonstersData } from '@components/monster/data';
import { HERO_KEY } from '@app/lib/consts';
import type { IHeroAttributes } from './hero.component';
import type { TMonstersData } from '@pages/monsters/monster.model';
import type { TEquipment } from '@components/equipment/equipment.model';

const heroAttributes: IHeroAttributes = {
  armor: 25,
  damage: 95,
  health: 360,
  level: 1,
  name: 'Lucian',
};

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private staticMonstersData: TMonstersData = staticMonstersData;
  private _inventory: TEquipment[] = [];
  heroAttributes: IHeroAttributes = heroAttributes;

  constructor() {
    const inventory = localStorage.getItem(HERO_KEY);

    if (inventory) {
      this._inventory = JSON.parse(inventory);
    }
  }

  get inventory(): TEquipment[] {
    return this._inventory;
  }
  
  pickItem(item?: TEquipment): void {
    if (item) {
      this._inventory.push(item);
      localStorage.setItem(HERO_KEY, JSON.stringify({ inventory: this._inventory}));
      console.log(this._inventory);
    }
  }
  
  dropItem(item?: TEquipment): void {
    const filterDroppedItem = this._inventory.filter((invItem) => invItem.id !== item?.id);
    localStorage.setItem(HERO_KEY, JSON.stringify({ inventory: filterDroppedItem}));
    console.log(filterDroppedItem);
  }

  heroAttack(randomMonsterKey: string): void {
    this.staticMonstersData[randomMonsterKey].health -= this.heroAttributes.damage;

    if (this.staticMonstersData[randomMonsterKey].health <= 0) {
      this.staticMonstersData[randomMonsterKey].health = 0;
      return;
    }
  }
}
