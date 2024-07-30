import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { FightComponent } from './pages/fight/fight.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'fight', component: FightComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
