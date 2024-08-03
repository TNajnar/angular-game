import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MonstersListService } from '../services/monsters-list.service';
import { IMonster, IMonsters, TMonstersData } from '../services/types';
import { staticMonstersData } from '../data';

@Component({
  selector: 'app-enemy-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monsters-list.component.html',
})

export class MonstersListComponent implements OnInit {
  private router: Router;
  monsters: IMonsters['results'] | undefined;
  staticMonstersData: TMonstersData = staticMonstersData;

  constructor (private monstersListService: MonstersListService, router: Router) {
    this.router = router;
  }

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
    this.router.navigate(['/monster', monster.index]);
  }
}
