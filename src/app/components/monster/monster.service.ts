import { Injectable, inject, signal } from '@angular/core';

import { staticMonstersData } from '../../lib/monsters-data';
import { HeroService } from '@components/hero/hero.service';
import { getRandomEnemyKey } from '@app/lib/utils';
import { RANDOM_MONSTER_KEY } from '@app/lib/consts';
import type { TMonster, TMonstersData } from '@pages/monsters/monster.model';

@Injectable({
  providedIn: 'root'
})

export class MonsterService {
  private _staticMonstersData = signal<TMonstersData>(staticMonstersData);
  
  randomMonsterKey!: string;
  monstersData = this._staticMonstersData.asReadonly();

  private _heroService: HeroService = inject(HeroService);

  constructor() {
    this.randomMonsterKey = this.getOrCreateRandomMonsterKey();
  }

  generateNewRandomKey(): string {
    const newKey = getRandomEnemyKey(staticMonstersData);
    localStorage.setItem(RANDOM_MONSTER_KEY, newKey);

    return newKey;
  }

  getOrCreateRandomMonsterKey(): string {
    const storedKey = localStorage.getItem(RANDOM_MONSTER_KEY);

    if (storedKey) {
      return storedKey;
    } else {
      const newKey = getRandomEnemyKey(staticMonstersData);
      localStorage.setItem(RANDOM_MONSTER_KEY, newKey);
      this.randomMonsterKey = newKey;
      return newKey;
    }
  }

  removeRandomMonster(): void {
    localStorage.removeItem(RANDOM_MONSTER_KEY)
  }

  get fightedMonsterUnit(): TMonster {
    return this.monstersData()[this.randomMonsterKey];
  }

  monsterAttack(monsterDamage: number): void {
    this._heroService.hero.health -= monsterDamage;
    
    if (this._heroService.hero.health <= 0) {
      this._heroService.hero.health = 0;
      return;
    }
  }
}
