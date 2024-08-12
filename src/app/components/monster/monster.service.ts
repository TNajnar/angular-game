import { Injectable } from '@angular/core';

import { staticMonstersData } from './data';
import { TMonstersData } from '@pages/monsters/services/types';

@Injectable({
  providedIn: 'root'
})

export class MonsterService {
  staticMonstersData: TMonstersData = staticMonstersData;
}
