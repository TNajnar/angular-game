import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { staticMonstersData } from '@app/lib/monsters-data';
import { HERO_KEY, BASE_HERO_HEALTH, BASE_HERO_DAMAGE, BASE_HERO_ARMOR, BASE_HERO_LEVEL, HERO_NAME, BASE_HERO_EXPERIENCE, BASE_HERO_NEXT_LEVEL_EXPERIENCE } from '@app/lib/consts';
import type { IEquippedItems, IHero, IHeroStorage } from './hero.model';
import type { TEquipment } from '@app/lib/types-model';
import type { TMonstersData } from '@pages/monsters/monster.model';

const heroAttributes: IHero = {
  armor: BASE_HERO_ARMOR,
  damage: BASE_HERO_DAMAGE,
  experience: BASE_HERO_EXPERIENCE,
  experienceToNextLevel: BASE_HERO_NEXT_LEVEL_EXPERIENCE,
  health: BASE_HERO_HEALTH,
  level: BASE_HERO_LEVEL,
  name: HERO_NAME,
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
  private _equippedItems = signal<IEquippedItems>({});

  hero: IHero = heroAttributes;
  inventory$ = new BehaviorSubject<TEquipment[]>([]);
  heroStorage: IHeroStorage = heroStorage;

  constructor() {
    const storedHeroData = localStorage.getItem(HERO_KEY);

    if (storedHeroData) {
      const parsedData: IHeroStorage = JSON.parse(storedHeroData);
      this._inventory = parsedData.inventory || [];
      this.inventory$.next([...this._inventory]);
      this._equippedItems.set(parsedData.equippedItems);
    }
  }

  get heroGetter(): IHero {
    return {
      ...this.hero,
      armor: this.hero.armor + (this._equippedItems().equippedArmor?.armor ?? 0),
      damage: this.hero.damage + (this._equippedItems().equippedWeapon?.damage ?? 0),
      health: this.hero.health + (this._equippedItems().equippedArmor?.health ?? 0),
    };
  }

  get inventory(): TEquipment[] {
    return this._inventory;
  }

  equippedItems = this._equippedItems.asReadonly();

  heroAttack(randomMonsterKey: string): void {
    this.staticMonstersData[randomMonsterKey].health -= this.hero.damage;

    if (this.staticMonstersData[randomMonsterKey].health <= 0) {
      this.staticMonstersData[randomMonsterKey].health = 0;
      return;
    }
  }

  handleHeroNextLevel(randomMonsterKey: string): void {

    this.hero.experience += this.staticMonstersData[randomMonsterKey].experience;

    if (this.hero.experience >= this.heroGetter.experienceToNextLevel) {
      this.hero.experience -= this.heroGetter.experienceToNextLevel;
      this.hero.level++;
      this.hero.experienceToNextLevel = this.hero.experienceToNextLevel * 1.5;
    }
  }

  addToInventory(item: TEquipment): void {
    this._inventory = [...this._inventory, item]; // This step is important (Create a new array reference)
    this.inventory$.next(this._inventory);

    this.heroStorage = { ...this.heroStorage, inventory: this._inventory };
    localStorage.setItem(HERO_KEY, JSON.stringify(this.heroStorage));
  }

  removeFromInventory(item: TEquipment): void {
    this._inventory = this._inventory.filter(invItem => invItem.id !== item?.id);
    this.inventory$.next(this._inventory);

    this.heroStorage = { ...this.heroStorage, inventory: this._inventory };
    localStorage.setItem(HERO_KEY, JSON.stringify(this.heroStorage));
  }

  updateEquippedItem(isArmor: boolean, pickedItem?: TEquipment): void {
    this._equippedItems.update(prevState => ({
      ...prevState,
      ...(isArmor ? { equippedArmor: pickedItem } : { equippedWeapon: pickedItem })
    }));
  
    const equipToStore = {
      ...this._equippedItems(),
      ...(isArmor ? { equippedArmor: pickedItem } : { equippedWeapon: pickedItem })
    };

    this.heroStorage = { ...this.heroStorage, equippedItems: equipToStore };
    localStorage.setItem(HERO_KEY, JSON.stringify(this.heroStorage));
  }

  equipItem(pickedItem: TEquipment): void {
    const isArmor = pickedItem.type === 'armor';

    const actualEquippedItem = (isArmor
      ? this._equippedItems().equippedArmor
      : this._equippedItems().equippedWeapon
    );

    if (actualEquippedItem) {
      this.exchangeItem(pickedItem, actualEquippedItem, isArmor);
      return;
    }

    this.updateEquippedItem(isArmor, pickedItem);
    this.removeFromInventory(pickedItem);
  }

  unEquipItem(equippedItem?: TEquipment): void {
    if (!equippedItem) return;

    const isArmor = equippedItem.type === 'armor';
  
    this.updateEquippedItem(isArmor, undefined);
    this.addToInventory(equippedItem);
  }

  // If hero has some item equipped, change them
  private exchangeItem(equippedItem: TEquipment, actualEquippedItem: TEquipment, isArmor: boolean): void {
    if (!this._equippedItems()) return;

    this.addToInventory(actualEquippedItem);

    this.updateEquippedItem(isArmor, equippedItem);
    this.removeFromInventory(equippedItem);
  }
}
