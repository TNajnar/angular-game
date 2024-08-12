import { Injectable } from '@angular/core';

import { MonsterService } from '@components/monster/monster.service';
import { RANDOM_MONSTER_KEY } from '@app/lib/consts';

function randomNumber(number: number) {
  return Math.floor(Math.random() * number);
}

@Injectable({
  providedIn: 'root'
})

export class FightService {
  constructor (private monsterService: MonsterService) {}

  getRandomEnemyKey(): string {
    const keys = Object.keys(this.monsterService.staticMonstersData);
    const randomIndex = randomNumber(keys.length);

    return keys[randomIndex];
  }

  getOrCreateRandomMonsterKey(): string {
    const storedKey = localStorage.getItem(RANDOM_MONSTER_KEY);

    if (storedKey) {
      return storedKey;
    } else {
      const newKey = this.getRandomEnemyKey();
      localStorage.setItem(RANDOM_MONSTER_KEY, newKey);
      return newKey;
    }
  }

  removeRandomMonster(): void {
    localStorage.removeItem(RANDOM_MONSTER_KEY)
  }
}
