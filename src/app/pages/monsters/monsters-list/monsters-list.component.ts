import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MonstersListService } from '../monsters-list.service';
import { staticMonstersData } from '@components/monster/data';
import type { IMonster, IMonsters, TMonstersData } from '../monster.model';

@Component({
  selector: 'app-enemy-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monsters-list.component.html',
})

export class MonstersListComponent implements OnInit {
  monsters: IMonsters['results'] | undefined;
  staticMonstersData: TMonstersData = staticMonstersData;

  monstersListService: MonstersListService = inject(MonstersListService);
  router: Router = inject(Router);

  ngOnInit(): void {
    this.monstersListService.fetchMonsters().subscribe({
      next: (data) => {
        this.monsters = data.results;
      },
      error: (error) => {
        console.error('Failed to fetch Monsters: ', error);
      }
    })
  }

  navigateMonsterDetail(monster: IMonster): void {
    this.monstersListService.setSelectedMonsterIndex(monster.index);
    this.router.navigate(['/monster', monster.index]);
  }
}
