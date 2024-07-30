import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { FightComponent } from './pages/fight/fight.component';
import { BackgroundChangerComponent } from './background-changer/background-changer.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'fight', component: FightComponent },
  { path: 'change-background', component: BackgroundChangerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
