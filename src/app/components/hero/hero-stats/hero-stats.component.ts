import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';

import { HeroService } from '../hero.service';
import { heroStatsTexts } from '@app/lib/static-texts';
import { IHeroAttributes } from '../hero.model';

@Component({
  standalone: true,
  imports: [NgIf],
  selector: 'hero-stats',
  template: `
    <div class="flex flex-col w-full text-lg">
      <span>{{ texts.hero }}
        <span class="text-xl text-saffron">{{ hero.name }}</span>
      </span>
      <span>{{ texts.armor }}
        <span class="text-xl text-saffron">{{ hero.armor }}
          <span *ngIf="heroService.equippedItems().equippedArmor" class="text-keppel">
            (+ {{ heroService.equippedItems().equippedArmor?.armor }})
          </span>
        </span>
      </span>
      <span>{{ texts.health }}
        <span class="text-xl text-saffron">{{ hero.health }}
          <span *ngIf="heroService.equippedItems().equippedArmor" class="text-keppel">
            (+ {{ heroService.equippedItems().equippedArmor?.health }})
          </span>
        </span>
      </span>
      <span>{{ texts.damage }}
        <span class="text-xl text-saffron">{{ hero.damage }}
          <span *ngIf="heroService.equippedItems().equippedWeapon" class="text-keppel">
            (+ {{ heroService.equippedItems().equippedWeapon?.damage }})
          </span>
        </span>
      </span>
      <span>{{ texts.level }} 
        <span class="text-xl text-saffron">{{ hero.level }}</span>
      </span>
    </div>
  `
})

export class HeroStatsComponent {
  texts = heroStatsTexts;

  heroService: HeroService = inject(HeroService);

  get hero(): IHeroAttributes {
    return this.heroService.heroGetter;
  }
}
