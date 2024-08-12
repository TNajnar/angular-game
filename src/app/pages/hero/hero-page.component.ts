import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CustomIconComponent, EIconVariants } from '@app/ui/custom-icon/custom-icon.component';
import { InventoryComponent } from '@components/inventory/inventory.component';
import { HeroComponent } from '@components/hero/hero.component';
import { HeroService } from '@components/hero/hero.service';

const equipIcons: EIconVariants[] = [
  EIconVariants.Helmet, EIconVariants.Armor,  EIconVariants.Pants, EIconVariants.Boots, EIconVariants.Weapon,
]

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [CommonModule, CustomIconComponent, InventoryComponent, HeroComponent],
  templateUrl: './hero-page.component.html',
})

export class HeroPageComponent {
  hero!: HeroService;

  equipIcons: EIconVariants[] = equipIcons;
  EIconVariants = EIconVariants;

  constructor (heroService: HeroService) {
    this.hero = heroService;
  };
}
