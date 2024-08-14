import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { TWeapon } from '@app/lib/types';

export interface IHeroAttributes {
  armor: number;
  damage: number; 
  health: number; // health = health + armor
  level: number;
  name: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './hero.component.html',
})

export class HeroComponent {

}
