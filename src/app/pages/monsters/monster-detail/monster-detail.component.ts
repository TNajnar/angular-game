import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonstersListService } from '@pages/monsters/monsters-list.service';
import { MonsterComponent } from '@components/monster/monster.component';
import { staticMonstersData } from '@components/monster/data';
import type { IMonsterDetail, TMonstersData } from '../monster.model';

@Component({
  selector: 'app-monster-detail',
  standalone: true,
  imports: [CommonModule, MonsterComponent],
  templateUrl: './monster-detail.component.html',
})

export class MonsterDetailComponent implements OnInit {
  monsterDetails?: IMonsterDetail;
  staticMonstersData: TMonstersData = staticMonstersData;
  isLoading: boolean = true;

  monstersListService: MonstersListService = inject(MonstersListService);
  private destroyRef: DestroyRef = inject(DestroyRef);
  
  ngOnInit(): void {
    const subscription = this.monstersListService.fetchMonster().subscribe({
      next: (monsterDetailData) => {
        this.monsterDetails = monsterDetailData;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to fetch Monster details: ', error);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }
}
