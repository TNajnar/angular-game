import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TMonstersData } from '@pages/monsters/services/types';
import { MonsterService } from './monster.service';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monster.component.html',
})

export class MonsterComponent {
  @Input() monsterIndex: string = '';
  @Input() isLoading?: boolean = false;

  staticMonstersData!: TMonstersData;

  constructor (private monsterService: MonsterService) {
    this.staticMonstersData = this.monsterService.staticMonstersData;
  }
}
