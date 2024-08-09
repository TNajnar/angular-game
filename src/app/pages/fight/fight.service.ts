import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { RANDOM_MONSTER_KEY } from '@app/lib/consts';
import { staticMonstersData } from '@components/monster/data';

function randomNumber(number: number) {
  return Math.floor(Math.random() * number);
}

@Injectable({
  providedIn: 'root'
})

export class FightService {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  
  getRandomEnemyKey() {
    const keys = Object.keys(staticMonstersData);
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

  removeRandomMonster() {
    localStorage.removeItem(RANDOM_MONSTER_KEY)
  }
}
