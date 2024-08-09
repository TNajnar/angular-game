import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { HeroComponent, IHero } from '@components/hero/hero.component';
import { staticMonstersData } from '@components/monster/data';
import { MonsterComponent } from '@components/monster/monster.component';
import { TMonstersData } from '@pages/monsters/services/types';
import { FightService } from './fight.service';
import { Router } from '@angular/router';

function randomNumber(number: number) {
  return Math.floor(Math.random() * number);
}

@Component({
  selector: 'app-fight',
  standalone: true,
  imports: [HeroComponent, MonsterComponent],
  templateUrl: './fight.component.html',
})

export class FightComponent implements AfterViewInit {
  @ViewChild(HeroComponent) heroComponent!: HeroComponent;
  @ViewChild(MonsterComponent) enemyComponent!: MonsterComponent;
  
  private router: Router;
  randomMonsterKey!: string;
  staticMonstersData: TMonstersData = staticMonstersData;

  hero!: IHero;
  enemy!: MonsterComponent;

  constructor (private fightService: FightService, router: Router) {
    this.randomMonsterKey = this.fightService.getOrCreateRandomMonsterKey();
    this.router = router;
  }

  ngAfterViewInit(): void {
    this.enemy = this.enemyComponent;
    this.hero = this.heroComponent;
  }

  navigateToHero() {
    this.fightService.removeRandomMonster();
    this.router.navigate(['/hero']);
  };
}
