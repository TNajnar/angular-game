import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MonstersListService } from '@pages/monsters/services/monsters-list.service';
import { MonsterComponent } from '@components/monster/monster.component';
import { IMonsterDetail, TMonstersData } from '../services/types';
import { staticMonstersData } from '@components/monster/data';

@Component({
  selector: 'app-monster-detail',
  standalone: true,
  imports: [CommonModule, MonsterComponent],
  templateUrl: './monster-detail.component.html',
})

export class MonsterDetailComponent implements OnInit {
  monstersListService: MonstersListService = inject(MonstersListService);
  
  monsterDetails?: IMonsterDetail;
  staticMonstersData: TMonstersData = staticMonstersData;
  isLoading: boolean = true;
  
  ngOnInit(): void {
    this.monstersListService.fetchMonster().subscribe({
      next: (monsterDetailData) => {
        this.monsterDetails = monsterDetailData;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to fetch Monster details: ', error);
      },
    });
  }
}
