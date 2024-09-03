import { Component, inject } from '@angular/core';

import { HeroService } from '@components/hero/hero.service';
import { CustomIconComponent, EIconVariants } from '@app/ui/custom-icon/custom-icon.component';
import { InventoryComponent } from '@components/inventory/inventory.component';
import { HeroComponent } from '@components/hero/hero.component';
import { HeroStatsComponent } from '@components/hero/hero-stats.component';

const equipIcons: EIconVariants[] = [
  EIconVariants.Helmet, EIconVariants.Armor,  EIconVariants.Pants, EIconVariants.Boots, EIconVariants.Weapon,
]

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [CustomIconComponent, InventoryComponent, HeroComponent, HeroStatsComponent],
  templateUrl: './hero-page.component.html',
})

export class HeroPageComponent {
  equipIcons: EIconVariants[] = equipIcons;
  EIconVariants = EIconVariants;
  
  hero: HeroService = inject(HeroService);
}
