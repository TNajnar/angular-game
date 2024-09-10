import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { MonsterService } from '@components/monster/monster.service';
import { ErrorService } from './components/shared/error.service';
import { HeaderComponent } from './components/header/header.component';
import { ErrorModalComponent } from "./components/shared/modal/error-modal/error-modal.component";
import { RANDOM_MONSTER_KEY } from './lib/consts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ErrorModalComponent],
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  private pathname!: string;
  
  private router: Router = inject(Router);
  private destroyRef: DestroyRef = inject(DestroyRef);
  private monsterService: MonsterService = inject(MonsterService);
  private errorService: ErrorService = inject(ErrorService);

  error = this.errorService.error;

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
