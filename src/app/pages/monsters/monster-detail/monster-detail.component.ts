import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MonstersListService } from '@pages/monsters/services/monsters-list.service';
import { IMonsterDetail, TMonstersData } from '../services/types';
import { staticMonstersData } from '../data';
import { MonsterComponent } from '@components/monster/monster.component';

@Component({
  selector: 'app-monster-detail',
  standalone: true,
  imports: [CommonModule, MonsterComponent],
  templateUrl: './monster-detail.component.html',
})

export class MonsterDetailComponent implements AfterViewInit {
  @ViewChild(MonsterComponent) monsterComponent!: MonsterComponent;

  monster!: MonsterComponent;

  ngAfterViewInit(): void {
    this.monster = this.monsterComponent;
  }
}

// private route: ActivatedRoute;

// monsterDetails?: IMonsterDetail;
// monsterIndex: string = '';
// isLoading: boolean = true;

// staticMonstersData: TMonstersData = staticMonstersData;

// constructor (private monstersListService: MonstersListService, route: ActivatedRoute) {
//   this.route = route;
// }

// ngOnInit(): void {
//   const monsterIndex = this.route.snapshot.paramMap.get('index');

//   if (monsterIndex) {
//     this.monstersListService.fetchMonster(monsterIndex).subscribe({
//       next: (monsterDetailData) => {
//         this.monsterDetails = monsterDetailData;
//         this.monsterIndex = monsterIndex;
//         this.isLoading = false;
//       },
//       error: (error) => {
//         console.error('Failed to fetch Monster details: ', error);
//       },
//     });
//   }
// }
