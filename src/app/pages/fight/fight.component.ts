import { Component, inject, signal } from '@angular/core';

import { HeroService } from '@components/hero/hero.service';
import { MonsterService } from '@components/monster/monster.service';
import { HeroComponent } from '@components/hero/hero.component';
import { MonsterComponent } from '@components/monster/monster.component';
import { CharacterStatsComponent } from '@components/shared/character-stats/character-stats.component';
import { MatButtonModule } from '@angular/material/button';
import { handleWinText } from './utils';
import type { TMonsterDataItem } from '@pages/monsters/monster.model';
import type { IFightDetails } from './fight.model';

@Component({
  selector: 'app-fight',
  standalone: true,
  imports: [HeroComponent, MonsterComponent, CharacterStatsComponent, MatButtonModule],
  templateUrl: './fight.component.html',
  styleUrl: './fight.component.css',
})

export class FightComponent {
  fightDetails = signal<IFightDetails>({ attacking: false, character: '' });
  private isHeroAttackFirst: boolean = !!(Math.floor(Math.random() * 2) === 0);
  private fightIntervalId: number | null = null;

  heroService: HeroService = inject(HeroService);
  monsterService: MonsterService = inject(MonsterService);


  get monsterRandomUnit(): TMonsterDataItem {
    return this.monsterService.monstersData()[this.monsterService.randomMonsterKey];
  }

  onHeroAttack(): void {
    this.isHeroAttackFirst = true;
    this.heroService.heroAttack(this.monsterService.randomMonsterKey);
  }

  onMonsterAttack(): void {
    this.isHeroAttackFirst = false;
    this.monsterService.monsterAttack(this.monsterRandomUnit.damage);
  }

  startFight(): void {
    const { name: heroName, health } = this.heroService.heroAttributes;

    this.fightIntervalId = window.setInterval(() => {
      if (this.heroService.heroAttributes.health <= 0 || this.monsterRandomUnit.health <= 0) {
        this.fightDetails.update(details => ({ ...details, character: handleWinText(health, heroName) }));
        this.endFight();
        return;
      }

      this.fightDetails.update(details => ({ ...details, attacking: true }));

      if (this.isHeroAttackFirst) {
        this.onMonsterAttack();
        this.fightDetails.update(details => ({ ...details, attacking: false, character: 'Monster attacking' }));

        return;
      }

      this.onHeroAttack();
      this.fightDetails.update(details => ({ ...details, character: `${heroName} attacking`, attacking: false }));
    }, 2500);
  }

  endFight(): void {
    const { name: heroName, health } = this.heroService.heroAttributes;

    this.fightDetails.update(details => ({ ...details, character: handleWinText(health, heroName) }));
    if (this.fightIntervalId !== null) {
      clearInterval(this.fightIntervalId);
      this.fightIntervalId = null;
    }
  }

  findNewMonster(): void {
    const generatedNewMonsterKey = this.monsterService.generateNewRandomKey();
    this.monsterService.randomMonsterKey = generatedNewMonsterKey;
  }
}
