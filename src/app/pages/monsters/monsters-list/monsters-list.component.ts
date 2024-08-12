import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MonstersListService } from '../services/monsters-list.service';
import { IMonster, IMonsters, TMonstersData } from '../services/types';
import { staticMonstersData } from '@components/monster/data';

@Component({
  selector: 'app-enemy-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monsters-list.component.html',
})

export class MonstersListComponent implements OnInit {
  monsters: IMonsters['results'] | undefined;
  staticMonstersData: TMonstersData = staticMonstersData;

  constructor (private monstersListService: MonstersListService, private router: Router) { }

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
