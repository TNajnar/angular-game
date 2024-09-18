import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { HeroService } from '@components/hero/hero.service';
import { MonsterService } from '@components/monster/monster.service';
import { EquipItemsService } from '@app/components/shared/equip-items/equip-items.service';
import { HeroComponent } from '@components/hero/hero.component';
import { MonsterComponent } from '@components/monster/monster.component';
import { EquipItemsComponent } from '@app/components/shared/equip-items/equip-items.component';
import { CharacterStatsComponent } from '@components/shared/character-stats/character-stats.component';
import { handleWinText, randomNumbers } from '@app/lib/utils';
import equipment from '@app/lib/equipment-data';
import { buttonsTexts } from '@app/lib/static-texts';
import type { TMonster } from '@pages/monsters/monster.model';
import type { IFightDetails } from './fight.model';
import type { IHero } from '@app/components/hero/hero.model';

@Component({
  selector: 'app-fight',
  standalone: true,
  imports: [
    HeroComponent, MonsterComponent, CharacterStatsComponent, MatButtonModule, EquipItemsComponent,
  ],
  templateUrl: './fight.component.html',
  styleUrl: './fight.component.css',
})

export class FightComponent {
  buttonsTexts = buttonsTexts;
  private isHeroAttackFirst: boolean = !!(Math.floor(Math.random() * 2) === 0);
  private fightIntervalId: number | null = null;
  fightDetails = signal<IFightDetails>({ infoText: '', isFightOn: false });

  monsterService: MonsterService = inject(MonsterService);
  heroService: HeroService = inject(HeroService);
  private equipItemsService: EquipItemsService = inject(EquipItemsService);

  get monsterUnit(): TMonster {
    return this.monsterService.monstersData()[this.monsterService.randomMonsterKey];
  }

  get heroUnit(): IHero {
    return this.heroService.heroGetter;
  }

  get heroOrMonsterIsDefeated(): boolean {
    return this.heroUnit.health <= 0 || this.monsterUnit.health <= 0;
  }

  onHeroAttack(): void {
    this.isHeroAttackFirst = true;
    this.heroService.heroAttack(this.monsterService.randomMonsterKey);
  }

  onMonsterAttack(): void {
    this.isHeroAttackFirst = false;
    this.monsterService.monsterAttack(this.monsterUnit.damage);
  }

  startFight(): void {
    if (this.heroOrMonsterIsDefeated) {
      return;
    }

    const { name: heroName } = this.heroUnit;
    this.fightDetails.update(details => ({ ...details, isFightOn: true }));

    this.fightIntervalId = window.setInterval(() => {
      if (this.heroOrMonsterIsDefeated) {
        this.endFight();
        return;
      }

      if (this.isHeroAttackFirst) {
        this.onMonsterAttack();
        this.fightDetails.update(details => ({
          ...details, infoText: 'Monster attacking',
        }));
        return;
      }

      this.onHeroAttack();
      this.fightDetails.update(details => ({
        ...details, infoText: `${heroName} attacking`,
      }));
    }, 2500);
  }

  endFight(): void {
    const { name: heroName, health: heroHealth } = this.heroUnit;
    const { health: enemyHealth } = this.monsterUnit;

    if (heroHealth > enemyHealth) {
      this.monsterUnit.health = 0;
      this.heroService.handleHeroNextLevel(this.monsterService.randomMonsterKey);
      const { number1, number2 } = randomNumbers(equipment.length);
      this.equipItemsService.appendRandomEquipment(number1, number2);
    } else {
      this.heroUnit.health = 0;
    }

    this.fightDetails.update(details => ({
      ...details, infoText: handleWinText(enemyHealth, heroHealth, heroName), isFightOn: false,
    }));
    if (this.fightIntervalId !== null) {
      clearInterval(this.fightIntervalId);
      this.fightIntervalId = null;
    }
  }

  findNewMonster(): void {
    this.fightDetails.update(details => ({ ...details, infoText: '' }));
    const generatedNewMonsterKey = this.monsterService.generateNewRandomKey();
    this.monsterService.randomMonsterKey = generatedNewMonsterKey;
  }
}
