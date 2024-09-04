import { Component } from '@angular/core';

import { HeroComponent } from '@components/hero/hero.component';
import { InventoryComponent } from '@app/components/hero/inventory/inventory.component';
import { HeroStatsComponent } from '@app/components/hero/hero-stats/hero-stats.component';
import { CustomIconComponent, EIconVariants } from '@app/ui/custom-icon/custom-icon.component';

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
}
