import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MonstersListService } from '../monsters-list.service';
import { staticMonstersData } from '@components/monster/data';
import { monsterListTexts } from '@app/lib/static-texts';
import { MONSTERS_KEY } from '@app/lib/consts';
import type { IMonsters, TMonstersData } from '../monster.model';

@Component({
  selector: 'app-enemy-list',
  standalone: true,
  imports: [RouterLink, MatProgressSpinnerModule],
  templateUrl: './monsters-list.component.html',
})

export class MonstersListComponent implements OnInit {
  monsters: IMonsters['results'] | undefined;
  monstersData: TMonstersData = staticMonstersData;
  texts = monsterListTexts;

  isLoading = signal<boolean>(false);

  monstersListService: MonstersListService = inject(MonstersListService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const cachedMonsters = sessionStorage.getItem(MONSTERS_KEY);
  
    if (cachedMonsters) {
      const storedMonsters: IMonsters['results'] = JSON.parse(cachedMonsters);
      this.monsters = storedMonsters;
      return;
    }

    this.isLoading.set(true);
  
    const subscription = this.monstersListService.fetchMonsters().subscribe({
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

    this.destroyRef.onDestroy(() =>
      subscription.unsubscribe()
    );
  }
}
