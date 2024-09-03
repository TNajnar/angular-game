import { Injectable } from '@angular/core';

import { staticMonstersData } from '@components/monster/data';
import type { IHeroAttributes } from './hero.component';
import type { TMonstersData } from '@pages/monsters/monster.model';

type THeroDamage = {
  baseDamage: number;
  additionalDamage: number;
}

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private staticMonstersData: TMonstersData = staticMonstersData;;

  heroAttributes: IHeroAttributes = {
    armor: 25,
    damage: 95,
    health: 360,
    level: 1,
    name: 'Lucian',
  };

  // TODO
  // get heroDamage(): THeroDamage | number {
  //   const hasWeapon: THeroDamage = {
  //     baseDamage: this.heroAttributes.damage,
  //     additionalDamage: this.weapon.damage
  //   }

  //   return this.weapon.damage <= 0
  //     ? this.heroAttributes.damage
  //     : hasWeapon
  // }

  heroAttack(randomMonsterKey: string): void {
    this.staticMonstersData[randomMonsterKey].health -= this.heroAttributes.damage;

    if (this.staticMonstersData[randomMonsterKey].health <= 0) {
      this.staticMonstersData[randomMonsterKey].health = 0;
      return;
    }
  }
}
