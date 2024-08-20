import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MonsterService } from './monster.service';
import { CharacterProfileComponent } from "../shared/character-profile/character-profile.component";
import { TMonstersData } from '@pages/monsters/monster.model';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [CommonModule, CharacterProfileComponent],
  templateUrl: './monster.component.html',
})

export class MonsterComponent {
  @Input({ required: true }) monsterIndex!: string;
  @Input({ required: false }) isLoading?: boolean = false;

  staticMonstersData!: TMonstersData;

  constructor (private monsterService: MonsterService) {
    this.staticMonstersData = this.monsterService.staticMonstersData;
  }
}
