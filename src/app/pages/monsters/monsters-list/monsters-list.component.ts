import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MonstersListService } from '../monsters-list.service';
import { staticMonstersData } from '@components/monster/data';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import type { IMonsters, TMonstersData } from '../monster.model';

@Component({
  selector: 'app-enemy-list',
  standalone: true,
  imports: [RouterLink, MatProgressSpinnerModule],
  templateUrl: './monsters-list.component.html',
})

export class MonstersListComponent implements OnInit {
  monsters: IMonsters['results'] | undefined;
  staticMonstersData: TMonstersData = staticMonstersData;
  isLoading = signal<boolean>(false);

  monstersListService: MonstersListService = inject(MonstersListService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isLoading.set(true);
  
    const subscription = this.monstersListService.fetchMonsters().subscribe({
      next: (data) => {
        this.monsters = data.results;
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
