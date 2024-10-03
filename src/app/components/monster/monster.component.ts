import { Component, inject, Input, Signal } from '@angular/core';
import { NgIf } from '@angular/common';

import { MonsterService } from './monster.service';
import { CharacterProfileComponent } from "../shared/character-profile/character-profile.component";
import type { TMonstersData } from '@pages/monsters/monster.model';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [NgIf, CharacterProfileComponent],
  templateUrl: './monster.component.html',
})

export class MonsterComponent {
  @Input({ required: true }) monsterIndex!: string;
  @Input({ required: false }) isLoading?: boolean = false;

  private _monsterService: MonsterService = inject(MonsterService);

  monstersData: Signal<TMonstersData> = this._monsterService.monstersData;
}
