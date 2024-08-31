import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import type { IMonsterDetail, IMonsters } from './monster.model';

@Injectable({
  providedIn: 'root'
})

export class MonstersListService {
  private monstersApiUrl: string = 'https://www.dnd5eapi.co/api/monsters';
  selectedMonsterIndex!: string;
  
  private httpClient: HttpClient = inject(HttpClient);

  setSelectedMonsterIndex(index: string): void {
    this.selectedMonsterIndex = index;
  }

  get activeMonsterIndex(): string {
    return this.selectedMonsterIndex;
  }

  fetchMonsters(): Observable<IMonsters> {
    return this.httpClient.get<IMonsters>(this.monstersApiUrl).pipe(
      map((monsters: IMonsters) => ({
        ...monsters,
        results: monsters.results
          .filter(monster => !monster.name.toLowerCase().includes('dragon'))
          .slice(-13)
      }))
    );
  }

  // Index is correct url from monsters API
  fetchMonster(): Observable<IMonsterDetail> {
    return this.httpClient.get<IMonsterDetail>(`${this.monstersApiUrl}/${this.selectedMonsterIndex}`);
  }
}
