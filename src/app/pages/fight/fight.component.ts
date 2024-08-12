import { Component, inject } from '@angular/core';

import { FightService } from './fight.service';
import { HeroService } from '@components/hero/hero.service';
import { MonsterService } from '@components/monster/monster.service';
import { HeroComponent } from '@components/hero/hero.component';
import { MonsterComponent } from '@components/monster/monster.component';

@Component({
  selector: 'app-fight',
  standalone: true,
  imports: [HeroComponent, MonsterComponent],
  templateUrl: './fight.component.html',
})

export class FightComponent {
  randomMonsterKey!: string;
  
  private hero: HeroService = inject(HeroService);
  private monster: MonsterService = inject(MonsterService);
  
  isHeroAttackFirst: boolean = Math.floor(Math.random() * 2) === 0 ? false : true;

  constructor (private fightService: FightService) {
    this.randomMonsterKey = this.fightService.getOrCreateRandomMonsterKey();
  }

  heroAttack(heroDamage: number): void {
    this.monster.staticMonstersData[this.randomMonsterKey].health -= heroDamage;
    this.isHeroAttackFirst = true;

    if (this.monster.staticMonstersData[this.randomMonsterKey].health <= 0) {
      this.monster.staticMonstersData[this.randomMonsterKey].health = 0;
      return;
    }
  }

  monsterAttack(monsterDamage: number): void {
    this.hero.heroAttributes.health -= monsterDamage;
    this.isHeroAttackFirst = false;
    
    if (this.hero.heroAttributes.health <= 0) {
      this.hero.heroAttributes.health = 0;
      return;
    }
  }
  
  startFight(): void {
    const { damage: heroDamage } = this.hero.heroAttributes;
    const { damage: monsterDamage } = this.monster.staticMonstersData[this.randomMonsterKey];

    const fightIntervalId = setInterval(() => {
      if (this.hero.heroAttributes.health <= 0 || this.monster.staticMonstersData[this.randomMonsterKey].health <= 0 ) {
        clearInterval(fightIntervalId);
        console.log('Fight is ended.')
        console.log(this.hero.heroAttributes.health > 0 ? 'Hero won' : 'Monster won')
        return;
      }

      if (this.isHeroAttackFirst) {
        this.monsterAttack(monsterDamage);
        console.log('monster hit')
        return;
      }

      console.log('hero hit')
      this.heroAttack(heroDamage);
    }, 2500)
  };
}
