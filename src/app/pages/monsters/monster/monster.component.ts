import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MonstersListService } from '@pages/monsters/services/monsters-list.service';
import { IMonsterDetail, TMonstersData } from '../services/types';
import { staticMonstersData } from '../data';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monster.component.html',
})

export class MonsterComponent implements OnInit {
  private route: ActivatedRoute;
  monsterDetails: IMonsterDetail | undefined;
  staticMonstersData: TMonstersData = staticMonstersData;
  monsterIndex: string = '';
  isLoading: boolean = true;
  
  constructor (private monstersListService: MonstersListService, route: ActivatedRoute) {
    this.route = route;
  }

  ngOnInit(): void {
    const monsterIndex = this.route.snapshot.paramMap.get('index');

    if (monsterIndex) {
      this.monstersListService.fetchMonster(monsterIndex).subscribe({
        next: (monsterDetailData) => {
          this.monsterIndex = monsterIndex;
          this.monsterDetails = monsterDetailData;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Failed to fetch Monster details: ', error);
        },
      });
    }
  }
}
