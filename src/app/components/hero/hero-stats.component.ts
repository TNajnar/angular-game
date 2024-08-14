import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';

import { HeroComponent, IHeroAttributes } from './hero.component';
import { HeroService } from './hero.service';


@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'hero-stats',
  template: `
    <div class="flex flex-col desktop:pl-10 w-full text-lg desktop:w-1/4">
      <span>Hrdina: 
        <span class="text-xl text-saffron">{{ heroService.heroAttributes.name }}</span>
      </span>
      <span>Brnění:
        <span class="text-xl text-saffron">{{ heroService.heroAttributes.armor }}</span>
      </span>
      <span>Životy:
        <span class="text-xl text-saffron">{{ heroService.heroAttributes.health }}</span>
      </span>
      <span>Poškození:
        <span class="text-xl text-saffron">{{ heroService.heroAttributes.damage }}
          <span *ngIf="heroService.weapon.damage > 0" class="text-keppel"> + {{ heroService.weapon.damage }}</span>
        </span>
      </span>
      <span>Level: 
        <span class="text-xl text-saffron">{{ heroService.heroAttributes.level }}</span>
      </span>
    </div>
  `
})

export class HeroStatsComponent {
  heroService: HeroService = inject(HeroService);
}
