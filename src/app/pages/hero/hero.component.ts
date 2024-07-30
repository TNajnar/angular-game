import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type THeroAttributes = {
  armor: number;
  damage: number; 
  health: number; // health = health + armor
  level: number;
  name: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
})

export class HeroComponent {
  heroAttributes: THeroAttributes;
  inventory: string[] = Array.from({ length: 20 }, (_, index) => '');

  constructor () {
    this.heroAttributes = {
      armor: 25,
      damage: 95,
      health: 360,
      level: 1,
      name: 'Lucian',
    }
  }
}
