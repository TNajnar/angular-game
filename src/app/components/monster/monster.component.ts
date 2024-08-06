import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { staticMonstersData } from '@pages/monsters/data';
import { MonstersListService } from '@pages/monsters/services/monsters-list.service';
import { IMonsterDetail, TMonstersData } from '@pages/monsters/services/types';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monster.component.html',
})

export class MonsterComponent implements OnInit {
  private route: ActivatedRoute;

  monsterDetails?: IMonsterDetail;
  monsterIndex: string = '';
  isLoading: boolean = true;

  staticMonstersData: TMonstersData = staticMonstersData;

  constructor (private monstersListService: MonstersListService, route: ActivatedRoute) {
    this.route = route;
  }

  ngOnInit(): void {
    const monsterIndex = this.route.snapshot.paramMap.get('index');

    if (monsterIndex) {
      this.monstersListService.fetchMonster(monsterIndex).subscribe({
        next: (monsterDetailData) => {
          this.monsterDetails = monsterDetailData;
          this.monsterIndex = monsterIndex;
          console.log('', this.staticMonstersData[monsterIndex]);
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Failed to fetch Monster details: ', error);
        },
      });
    }
  }
}
