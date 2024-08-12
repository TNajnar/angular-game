import { Injectable } from '@angular/core';

import { THeroAttributes } from './hero.component';
import { TWeapon } from '@app/lib/types';

export interface IHero {
  heroAttributes: THeroAttributes;
  weapon: TWeapon;
}

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  heroAttributes: THeroAttributes = {
    armor: 25,
    damage: 95,
    health: 360,
    level: 1,
    name: 'Lucian',
  };

  weapon: TWeapon = { name: 'Sword', damage: 50 };
}
