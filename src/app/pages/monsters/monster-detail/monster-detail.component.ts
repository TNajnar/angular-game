import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MonstersListService } from '@pages/monsters/monsters-list.service';
import { MonsterComponent } from '@components/monster/monster.component';
import { staticMonstersData } from '@components/monster/data';
import { monsterDetailTexts } from '@app/lib/static-texts';
import type { IMonsterDetail, TMonstersData } from '../monster.model';

@Component({
  selector: 'app-monster-detail',
  standalone: true,
  imports: [NgIf, MonsterComponent, MatProgressSpinnerModule],
  templateUrl: './monster-detail.component.html',
})

export class MonsterDetailComponent implements OnInit {
  monsterDetails?: IMonsterDetail;
  monstersData: TMonstersData = staticMonstersData;
  texts = monsterDetailTexts;

  isLoading = signal<boolean>(false);

  monstersListService: MonstersListService = inject(MonstersListService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private destroyRef: DestroyRef = inject(DestroyRef);
  
  ngOnInit(): void {
    const monsterIndex = this.route.snapshot.paramMap.get('index');
    
    if (monsterIndex) {
      this.monstersListService.setSelectedMonsterIndex(monsterIndex);
      const subscription = this.monstersListService.fetchMonster(monsterIndex).subscribe({
        next: (monsterDetailData) => {
          this.monsterDetails = monsterDetailData;
        },
        complete: () => {
          this.isLoading.set(false);
        },
        error: (error) => {
          console.error('Failed to fetch Monster details: ', error);
        }
      });

      this.destroyRef.onDestroy(() =>
        subscription.unsubscribe()
      );
    }
  }
}
