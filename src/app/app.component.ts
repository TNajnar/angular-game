import { Component, DestroyRef, OnInit, inject } from '@angular/core';
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
  private pathname!: string;
  
  private router: Router = inject(Router);
  private destroyRef: DestroyRef = inject(DestroyRef);
  private monsterService: MonsterService = inject(MonsterService);

  ngOnInit(): void {
    const subscription = this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.pathname = event.url;
          if (!this.pathname.startsWith('/fight')) {
            localStorage.removeItem(RANDOM_MONSTER_KEY);
          } else {
            this.monsterService.getOrCreateRandomMonsterKey();
          }
        }
      }
    );

    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }
}
