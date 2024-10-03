import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import type { IMonsterDetail, IMonstersList } from './monster.model';

@Injectable({
  providedIn: 'root'
})

export class MonstersListService {
  private _monstersApiUrl: string = 'https://www.dnd5eapi.co/api/monsters';
  selectedMonsterIndex!: string;
  
  private _httpClient: HttpClient = inject(HttpClient);

  setSelectedMonsterIndex(index: string): void {
    this.selectedMonsterIndex = index;
  }

  get activeMonsterIndex(): string {
    return this.selectedMonsterIndex;
  }

  fetchMonsters(): Observable<IMonstersList> {
    return this._httpClient.get<IMonstersList>(this._monstersApiUrl).pipe(
      map((monsters: IMonstersList) => ({
        ...monsters,
        results: monsters.results
          .filter(monster => !monster.name.toLowerCase().includes('dragon'))
          .slice(-13)
      })),
    );
  }

  fetchMonster(monsterIndex: string): Observable<IMonsterDetail> {
    return this._httpClient.get<IMonsterDetail>(`${this._monstersApiUrl}/${monsterIndex}`);
  }
}
