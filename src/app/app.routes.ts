import { Routes } from '@angular/router';

import { HeroPageComponent } from './pages/hero/hero-page.component';
import { FightComponent } from './pages/fight/fight.component';
import { MonstersListComponent } from '@pages/monsters/monsters-list/monsters-list.component';
import { MonsterDetailComponent } from '@pages/monsters/monster-detail/monster-detail.component';

export const routes: Routes = [
  { path: 'hero', component: HeroPageComponent },
  { path: 'fight', component: FightComponent },
  { path: 'monsters', component: MonstersListComponent },
  { path: 'monster/:index', component: MonsterDetailComponent },
  { path: '', redirectTo: '/hero', pathMatch: 'full' },
];
