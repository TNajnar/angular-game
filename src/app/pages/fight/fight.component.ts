import { Component, inject } from '@angular/core';

import { HeroService } from '@components/hero/hero.service';
import { MonsterService } from '@components/monster/monster.service';
import { HeroComponent } from '@components/hero/hero.component';
import { MonsterComponent } from '@components/monster/monster.component';
import { CharacterStatsComponent } from '@components/shared/character-stats/character-stats.component';
import type { TMonsterDataItem } from '@pages/monsters/monster.model';
import type { IFightDetails } from './fight.model';

@Component({
  selector: 'app-fight',
  standalone: true,
  imports: [HeroComponent, MonsterComponent, CharacterStatsComponent],
  templateUrl: './fight.component.html',
  styleUrl: './fight.component.css',
})

export class FightComponent {
  fightDetails: IFightDetails = { attacking: false, character: '' };
  private isHeroAttackFirst: boolean = !!(Math.floor(Math.random() * 2) === 0);

  heroService: HeroService = inject(HeroService);
  monsterService: MonsterService = inject(MonsterService);

  get monsterRandomUnit(): TMonsterDataItem {
    return this.monsterService.staticMonstersData[this.monsterService.randomMonsterKey];
  }

  onHeroAttack(): void {
    this.isHeroAttackFirst = true;
    this.heroService.heroAttack(this.monsterService.randomMonsterKey);
  }

  onMonsterAttack(): void {
    this.isHeroAttackFirst = false;
    this.monsterService.monsterAttack(this.monsterRandomUnit.damage)
  }
  
  startFight(): void {
    const { name: heroName } = this.heroService.heroAttributes;

    const fightIntervalId = setInterval(() => {
      if (this.heroService.heroAttributes.health <= 0 || this.monsterRandomUnit.health <= 0) {
        const winText = this.heroService.heroAttributes.health > 0 ? `${heroName} won` : 'Monster won';
        this.fightDetails = { ...this.fightDetails, character: winText };
        clearInterval(fightIntervalId);
        return;
      }
      
      this.fightDetails = { ...this.fightDetails, attacking: true };

      if (this.isHeroAttackFirst) {
        this.onMonsterAttack();
        this.fightDetails = { attacking: false, character: 'Monster attacking' };
        return;
      }
      
      this.onHeroAttack();
      this.fightDetails = { character: `${heroName} attacking`, attacking: false };
    }, 2500)
  };

  // TODO
  endFight(): void {
    console.log('Haloo');
  }

  findNewMonster(): void {
    const generatedNewMonsterKey = this.monsterService.generateNewRandomKey();
    this.monsterService.randomMonsterKey = generatedNewMonsterKey;
  }
}
