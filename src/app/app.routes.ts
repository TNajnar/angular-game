import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { FightComponent } from './pages/fight/fight.component';
import { MonstersListComponent } from '@pages/monsters/monsters-list/monsters-list.component';
import { MonsterComponent } from '@pages/monsters/monster/monster.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hero', component: HeroPageComponent },
  { path: 'fight', component: FightComponent },
  { path: 'monsters', component: MonstersListComponent },
  { path: 'monster/:index', component: MonsterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
