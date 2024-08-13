import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export enum EIconVariants {
  Armor = 'ARMOR',
  Helmet = 'HELMET',
  Pants = 'PANTS',
  Boots = 'BOOTS',
  Weapon = 'WEAPON',
}

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-icon.component.html',
})

export class CustomIconComponent {
  @Input() variant!: EIconVariants;
  @Input() fill!: string;

  EIconVariants = EIconVariants;
}

