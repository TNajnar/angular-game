import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CustomIconComponent, EIconVariants } from '@app/ui/custom-icon/custom-icon.component'
import { WeaponComponent } from '@components/weapon/weapon.component';
import { TWeapon } from '@app/lib/types';
import { InventoryComponent } from '@components/inventory/inventory.component';

type THeroAttributes = {
  armor: number;
  damage: number; 
  health: number; // health = health + armor
  level: number;
  name: string;
}

const equipIcons: EIconVariants[] = [
  EIconVariants.Helmet, EIconVariants.Armor,  EIconVariants.Pants, EIconVariants.Boots, EIconVariants.Weapon,
]

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, CustomIconComponent, WeaponComponent, InventoryComponent],
  templateUrl: './hero.component.html',
})

export class HeroComponent {
  weapon: TWeapon = { name: 'Sword', damage: 50 };
  equipIcons: EIconVariants[] = equipIcons;
  heroAttributes: THeroAttributes;
  EIconVariants = EIconVariants;

  constructor () {
    this.heroAttributes = {
      armor: 25,
      damage: 95,
      health: 360,
      level: 1,
      name: 'Lucian',
    };
  };
}
