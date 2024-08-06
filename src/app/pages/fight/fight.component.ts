import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { HeroComponent, IHero } from '@components/hero/hero.component';

@Component({
  selector: 'app-fight',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './fight.component.html',
})

export class FightComponent implements AfterViewInit {
  @ViewChild(HeroComponent) heroComponent!: HeroComponent;

  hero!: IHero;

  ngAfterViewInit(): void {
    this.hero = this.heroComponent;
  }
}
