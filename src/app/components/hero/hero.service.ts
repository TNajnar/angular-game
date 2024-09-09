import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { staticMonstersData } from '@components/monster/data';
import { HERO_KEY } from '@app/lib/consts';
import type { TMonstersData } from '@pages/monsters/monster.model';
import type { TEquipment } from '@components/equipment/equipment.model';
import type { IEquippedItems, IHeroAttributes } from './hero.model';

interface IHeroStorage {
  inventory: TEquipment[];
  equippedItems: IEquippedItems;
}

const heroAttributes: IHeroAttributes = {
  armor: 25,
  damage: 95,
  health: 1300,
  level: 1,
  name: 'Lucian',
};

const heroStorage: IHeroStorage = {
  inventory: [],
  equippedItems: {},
}

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private staticMonstersData: TMonstersData = staticMonstersData;
  private _inventory: TEquipment[] = [];
  heroStorage: IHeroStorage = heroStorage;

  inventory$ = new BehaviorSubject<TEquipment[]>([]);
  heroAttributes: IHeroAttributes = heroAttributes;
  equippedItems = signal<IEquippedItems>({});

  constructor() {
    const storedHeroData = localStorage.getItem(HERO_KEY);

    if (storedHeroData) {
      const parsedData: IHeroStorage = JSON.parse(storedHeroData);
      this._inventory = parsedData.inventory || [];
      this.inventory$.next([...this._inventory]);
      this.equippedItems.set(parsedData.equippedItems);
    }
  }

  get inventory(): TEquipment[] {
    return this._inventory;
  }

  equipItem(pickedItem: TEquipment): void {
    const isTypeArmor = pickedItem.type === 'armor';
    
    this.equippedItems.update(prevState => ({
      ...prevState,
      ...(isTypeArmor ? { equippedArmor: pickedItem } : { equippedWeapon: pickedItem })
    }));
  
    const equipToStore = {
      ...this.equippedItems(),
      ...(isTypeArmor ? { equippedArmor: pickedItem } : { equippedWeapon: pickedItem })
    };
  
    this.dropInventoryEquip(pickedItem);
    this.heroStorage = { ...this.heroStorage, equippedItems: equipToStore };
    localStorage.setItem(HERO_KEY, JSON.stringify(this.heroStorage));
  }

  pickEquip(item: TEquipment): void {
    this._inventory = [...this._inventory, item]; // This step is important (Create a new array reference)
    this.inventory$.next(this._inventory);

    this.heroStorage = { ...this.heroStorage, inventory: this._inventory };
    localStorage.setItem(HERO_KEY, JSON.stringify(this.heroStorage));
  }

  dropInventoryEquip(item: TEquipment): void {
    this._inventory = this._inventory.filter(invItem => invItem.id !== item?.id);
    this.inventory$.next(this._inventory);

    this.heroStorage = { ...this.heroStorage, inventory: this._inventory };
    localStorage.setItem(HERO_KEY, JSON.stringify(this.heroStorage));
  }

  heroAttack(randomMonsterKey: string): void {
    this.staticMonstersData[randomMonsterKey].health -= this.heroAttributes.damage;

    if (this.staticMonstersData[randomMonsterKey].health <= 0) {
      this.staticMonstersData[randomMonsterKey].health = 0;
      return;
    }
  }
}
