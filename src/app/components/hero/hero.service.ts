import { Injectable } from '@angular/core';

import { TWeapon } from '@app/lib/types';
import { IHeroAttributes } from './hero.component';

type THeroDamage = {
  baseDamage: number;
  additionalDamage: number;
}

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  heroAttributes: IHeroAttributes = {
    armor: 25,
    damage: 95,
    health: 360,
    level: 1,
    name: 'Lucian',
  };

  weapon: TWeapon = { name: 'Sword', damage: 50 };

  get heroDamage(): THeroDamage | number {
    const hasWeapon: THeroDamage = {
      baseDamage: this.heroAttributes.damage,
      additionalDamage: this.weapon.damage
    }

    return this.weapon.damage <= 0
      ? this.heroAttributes.damage
      : hasWeapon
  }
}
