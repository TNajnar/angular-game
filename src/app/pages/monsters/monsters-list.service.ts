import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import type { IMonsterDetail, IMonsters } from './monster.model';

@Injectable({
  providedIn: 'root'
})

export class MonstersListService {
  private monstersApiUrl: string = 'https://www.dnd5eapi.co/api/monsters';
  private http: HttpClient;
  selectedMonsterIndex!: string;

  constructor(http: HttpClient) {
    this.http = http;
  }

  setSelectedMonsterIndex(index: string): void {
    this.selectedMonsterIndex = index;
  }

  get activeMonsterIndex(): string {
    return this.selectedMonsterIndex;
  }

  fetchMonsters(): Observable<IMonsters> {
    return this.http.get<IMonsters>(this.monstersApiUrl).pipe(
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
    return this.http.get<IMonsterDetail>(`${this.monstersApiUrl}/${this.selectedMonsterIndex}`);
  }
}
