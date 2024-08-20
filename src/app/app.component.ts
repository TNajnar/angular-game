import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { MonsterService } from '@components/monster/monster.service';
import { RANDOM_MONSTER_KEY } from './lib/consts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  private router: Router;
  pathname!: string;

  constructor (router: Router) {
    this.router = router;
  };

  private monsterService: MonsterService = inject(MonsterService);

  ngOnInit(): void {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.pathname = event.url;
          if (!this.pathname.startsWith('/fight')) {
            localStorage.removeItem(RANDOM_MONSTER_KEY);
          } else {
            this.monsterService.getOrCreateRandomMonsterKey();
          }
        }
      });
  }
}
