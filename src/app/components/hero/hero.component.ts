import { Component } from '@angular/core';
import { TWeapon } from '@app/lib/types';

export interface IHero {
  heroAttributes: THeroAttributes;
  weapon: TWeapon;
}

export type THeroAttributes = {
  armor: number;
  damage: number; 
  health: number; // health = health + armor
  level: number;
  name: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
})

export class HeroComponent {
  heroAttributes: THeroAttributes;
  weapon: TWeapon;

  constructor () {
    this.heroAttributes = {
      armor: 25,
      damage: 95,
      health: 360,
      level: 1,
      name: 'Lucian',
    };
    this.weapon = { name: 'Sword', damage: 50 };
  };
}
