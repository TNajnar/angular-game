import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { CharacterProfileComponent } from "../shared/character-profile/character-profile.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage, CharacterProfileComponent],
  templateUrl: './hero.component.html',
})

export class HeroComponent {

}
