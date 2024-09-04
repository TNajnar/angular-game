import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  inventory$ = new BehaviorSubject<TEquipment[]>([]);
  heroAttributes: IHeroAttributes = heroAttributes;

  constructor() {
    const storedHeroData = localStorage.getItem(HERO_KEY);

    if (storedHeroData) {
      const parsedData = JSON.parse(storedHeroData);
      this._inventory = parsedData.inventory || [];
      this.inventory$.next([...this._inventory]);
    }
  }

  get inventory(): TEquipment[] {
    return this._inventory;
  }
  
  pickItem(item?: TEquipment): void {
    if (item) {
      this._inventory = [...this._inventory, item]; // This step is important (Create a new array reference)
      this.inventory$.next(this._inventory);
      localStorage.setItem(HERO_KEY, JSON.stringify({ inventory: this._inventory}));
    }
  }
  
  dropItem(item?: TEquipment): void {
    this._inventory = this._inventory.filter(invItem => invItem.id !== item?.id);
    this.inventory$.next(this._inventory);
    localStorage.setItem(HERO_KEY, JSON.stringify({ inventory: this._inventory }));
  }

  heroAttack(randomMonsterKey: string): void {
    this.staticMonstersData[randomMonsterKey].health -= this.heroAttributes.damage;

    if (this.staticMonstersData[randomMonsterKey].health <= 0) {
      this.staticMonstersData[randomMonsterKey].health = 0;
      return;
    }
  }
}
