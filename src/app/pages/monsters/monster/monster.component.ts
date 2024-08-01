import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MonstersListService } from '@pages/monsters/services/monsters-list.service';
import { IMonster } from '../services/types';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [],
  templateUrl: './monster.component.html',
})

export class MonsterComponent implements OnInit {
  private route: ActivatedRoute;
  monsterDetails: IMonster | undefined;
  
  constructor (private monstersList: MonstersListService, route: ActivatedRoute) {
    this.route = route;
  }

  ngOnInit(): void {
    const monsterIndex = this.route.snapshot.paramMap.get('index');
    if (monsterIndex) {
      this.monstersList.fetchMonster(monsterIndex).subscribe({
        next: (monsterDetailData) => {
          console.log("🚀 ~ MonsterComponent ~ this.monstersList.fetchMonster ~ monsterDetailData:", monsterDetailData)
          this.monsterDetails = monsterDetailData;
        },
        error: (error) => {
          console.error('Failed to fetch Monster details: ', error);
        }
      });
    }
  }
}
