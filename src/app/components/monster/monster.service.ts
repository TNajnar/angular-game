import { Injectable, inject, signal } from '@angular/core';

import { staticMonstersData } from './data';
import { HeroService } from '@components/hero/hero.service';
import { RANDOM_MONSTER_KEY } from '@app/lib/consts';
import type { TMonsterDataItem, TMonstersData } from '@pages/monsters/monster.model';

function randomNumber(number: number) {
  return Math.floor(Math.random() * number);
}

function getRandomEnemyKey(): string {
  const keys = Object.keys(staticMonstersData);
  const randomIndex = randomNumber(keys.length);

  return keys[randomIndex];
}

@Injectable({
  providedIn: 'root'
})

export class MonsterService {
  private staticMonstersData = signal<TMonstersData>(staticMonstersData);
  
  randomMonsterKey!: string;
  monstersData = this.staticMonstersData.asReadonly();

  private hero: HeroService = inject(HeroService);

  constructor() {
    this.randomMonsterKey = this.getOrCreateRandomMonsterKey();
  }

  generateNewRandomKey(): string {
    const newKey = getRandomEnemyKey();
    localStorage.setItem(RANDOM_MONSTER_KEY, newKey);

    return newKey;
  }

  getOrCreateRandomMonsterKey(): string {
    const storedKey = localStorage.getItem(RANDOM_MONSTER_KEY);

    if (storedKey) {
      return storedKey;
    } else {
      const newKey = getRandomEnemyKey();
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
    this.hero.heroAttributes.health -= monsterDamage;
    
    if (this.hero.heroAttributes.health <= 0) {
      this.hero.heroAttributes.health = 0;
      return;
    }
  }
}
