import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';

import { HeroService } from '../hero.service';
import { heroStatsTexts } from '@app/lib/static-texts';
import type { IEquippedItems, IHero } from '../hero.model';

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
          <span *ngIf="heroEquip.equippedArmor" class="text-keppel">
            (+ {{ heroEquip.equippedArmor.armor }})
          </span>
        </span>
      </span>

      <span>{{ texts.health }}
        <span class="text-xl text-saffron">{{ hero.health }}
          <span *ngIf="heroEquip.equippedArmor" class="text-keppel">
            (+ {{ heroEquip.equippedArmor.health }})
          </span>
        </span>
      </span>

      <span>{{ texts.damage }}
        <span class="text-xl text-saffron">{{ hero.damage }}
          <span *ngIf="heroEquip.equippedWeapon" class="text-keppel">
            (+ {{ heroEquip.equippedWeapon.damage }})
          </span>
        </span>
      </span>

      <span>{{ texts.level }} 
        <span class="text-xl text-saffron">
          {{ hero.level }} &nbsp; ({{ hero.experience }} / {{ hero.experienceToNextLevel }} exp.)
        </span>
      </span>
    </div>
  `
})

export class HeroStatsComponent {
  texts = heroStatsTexts;

  heroService: HeroService = inject(HeroService);

  get hero(): IHero {
    return this.heroService.heroGetter;
  }

  get heroEquip(): IEquippedItems {
    return this.heroService.equippedItems();
  }
}
