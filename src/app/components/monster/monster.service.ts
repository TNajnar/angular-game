import { Injectable, inject, signal } from '@angular/core';

import { staticMonstersData } from './data';
import { HeroService } from '@components/hero/hero.service';
import { getRandomEnemyKey } from '@app/lib/utils';
import { RANDOM_MONSTER_KEY } from '@app/lib/consts';
import type { TMonsterDataItem, TMonstersData } from '@pages/monsters/monster.model';

@Injectable({
  providedIn: 'root'
})

export class MonsterService {
  private staticMonstersData = signal<TMonstersData>(staticMonstersData);
  
  randomMonsterKey!: string;
  monstersData = this.staticMonstersData.asReadonly();

  private heroService: HeroService = inject(HeroService);

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

  get monsterRandomUnit(): TMonsterDataItem {
    return this.monstersData()[this.randomMonsterKey];
  }

  monsterAttack(monsterDamage: number): void {
    this.heroService.hero.health -= monsterDamage;
    
    if (this.heroService.hero.health <= 0) {
      this.heroService.hero.health = 0;
      return;
    }
  }
}
