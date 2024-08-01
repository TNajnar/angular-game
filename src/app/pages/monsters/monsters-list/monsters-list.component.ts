import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MonstersListService } from '../services/monsters-list.service';
import { IMonsters } from '../services/types';

@Component({
  selector: 'app-enemy-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monsters-list.component.html',
})

export class MonstersListComponent implements OnInit {
  private router: Router;
  monsters: IMonsters['results'] | undefined;

  constructor (private monstersList: MonstersListService, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.monstersList.fetchMonsters().subscribe({
      next: (data) => {
        console.log("🚀 ~ MonstersListComponent ~ this.monstersList.fetchMonsters ~ data:", data)
        this.monsters = data.results
      },
      error: (error) => {
        console.error('Failed to fetch Monsters: ', error)
      }
    })
  }

  navigateMonsterDetail(monsterIndex: string): void {
    this.router.navigate(['/monster', monsterIndex])
  }
}
