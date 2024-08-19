import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { CharacterProfileComponent } from "../shared/character-profile/character-profile.component";

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
  imports: [NgOptimizedImage, CharacterProfileComponent],
  templateUrl: './hero.component.html',
})

export class HeroComponent {

}
