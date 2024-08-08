import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { HeroComponent, IHero } from '@components/hero/hero.component';
import { staticMonstersData } from '@components/monster/data';
import { MonsterComponent } from '@components/monster/monster.component';
import { TMonstersData } from '@pages/monsters/services/types';

@Component({
  selector: 'app-fight',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './fight.component.html',
})

export class FightComponent implements AfterViewInit {
  @ViewChild(HeroComponent) heroComponent!: HeroComponent;
  @ViewChild(MonsterComponent) enemyComponent!: MonsterComponent;

  staticMonstersData: TMonstersData = staticMonstersData;

  hero!: IHero;
  enemy!: MonsterComponent;

  ngAfterViewInit(): void {
    this.hero = this.heroComponent;
    this.enemy = this.enemyComponent;
  }
}
