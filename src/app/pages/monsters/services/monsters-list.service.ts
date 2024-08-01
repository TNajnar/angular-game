import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IMonsterDetail, IMonsters } from './types';

@Injectable({
  providedIn: 'root'
})

export class MonstersListService {
  private monstersApiUrl: string = 'https://www.dnd5eapi.co/api/monsters';
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  fetchMonsters(): Observable<IMonsters> {
    return this.http.get<IMonsters>(this.monstersApiUrl);
  }

  fetchMonster(index: string): Observable<IMonsterDetail> {
    return this.http.get<IMonsterDetail>(`${this.monstersApiUrl}/${index}`);
  }
}
