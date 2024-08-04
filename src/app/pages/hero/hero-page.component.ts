import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { CustomIconComponent, EIconVariants } from '@app/ui/custom-icon/custom-icon.component';
import { InventoryComponent } from '@components/inventory/inventory.component';
import { HeroComponent, IHero } from '@components/hero/hero.component';

const equipIcons: EIconVariants[] = [
  EIconVariants.Helmet, EIconVariants.Armor,  EIconVariants.Pants, EIconVariants.Boots, EIconVariants.Weapon,
]

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [CommonModule, CustomIconComponent, InventoryComponent, HeroComponent],
  templateUrl: './hero-page.component.html',
})

export class HeroPageComponent implements AfterViewInit {
  @ViewChild('hero') heroComponent!: HeroComponent;

  equipIcons: EIconVariants[] = equipIcons;
  EIconVariants = EIconVariants;

  hero!: IHero;

  ngAfterViewInit(): void {
    this.hero = this.heroComponent;
  }
}
