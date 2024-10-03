import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MonstersListService } from '../monsters-list.service';
import { staticMonstersData } from '@app/lib/monsters-data';
import { monsterListTexts } from '@app/lib/static-texts';
import { MONSTERS_KEY } from '@app/lib/consts';
import type { IMonstersList, TMonstersData } from '../monster.model';

@Component({
  selector: 'app-enemy-list',
  standalone: true,
  imports: [RouterLink, MatProgressSpinnerModule],
  templateUrl: './monsters-list.component.html',
})

export class MonstersListComponent implements OnInit {
  monsters: IMonstersList['results'] | undefined;
  monstersData: TMonstersData = staticMonstersData;
  texts = monsterListTexts;

  isLoading = signal<boolean>(false);

  private _monstersListService: MonstersListService = inject(MonstersListService);
  private _destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const cachedMonsters = sessionStorage.getItem(MONSTERS_KEY);
  
    if (cachedMonsters) {
      const storedMonsters: IMonstersList['results'] = JSON.parse(cachedMonsters);
      this.monsters = storedMonsters;
      return;
    }

    this.isLoading.set(true);
  
    const subscription = this._monstersListService.fetchMonsters().subscribe({
      next: (data) => {
        this.monsters = data.results;
        sessionStorage.setItem(MONSTERS_KEY, JSON.stringify(this.monsters))
      },
      complete: () => {
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Failed to fetch Monsters: ', error);
      }
    });

    this._destroyRef.onDestroy(() =>
      subscription.unsubscribe()
    );
  }
}
