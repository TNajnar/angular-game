import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';

import { HeroService } from '../hero.service';
import { heroStatsTexts } from '@app/lib/static-texts';

@Component({
  standalone: true,
  imports: [NgIf],
  selector: 'hero-stats',
  template: `
    <div class="flex flex-col w-full text-lg">
      <span>{{ heroStatsTexts.hero }}
        <span class="text-xl text-saffron">{{ heroService.heroAttributes.name }}</span>
      </span>
      <span>{{ heroStatsTexts.armor }}
        <span class="text-xl text-saffron">{{ heroService.heroAttributes.armor }}</span>
      </span>
      <span>{{ heroStatsTexts.health }}
        <span class="text-xl text-saffron">{{ heroService.heroAttributes.health }}</span>
      </span>
      <span>{{ heroStatsTexts.damage }}
        <span class="text-xl text-saffron">{{ heroService.heroAttributes.damage }}
          <!-- TODO
            <span *ngIf="heroService.weapon.damage > 0" class="text-keppel"> + {{ heroService.weapon.damage }}</span>
          -->
        </span>
      </span>
      <span>{{ heroStatsTexts.level }} 
        <span class="text-xl text-saffron">{{ heroService.heroAttributes.level }}</span>
      </span>
    </div>
  `
})

export class HeroStatsComponent {
  heroStatsTexts = heroStatsTexts;

  heroService: HeroService = inject(HeroService);
}
