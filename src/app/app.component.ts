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
  private _pathname!: string;
  
  private _router: Router = inject(Router);
  private _destroyRef: DestroyRef = inject(DestroyRef);
  private _monsterService: MonsterService = inject(MonsterService);
  private _errorService: ErrorService = inject(ErrorService);

  error = this._errorService.error;

  ngOnInit(): void {
    const subscription = this._router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this._pathname = event.url;
          if (!this._pathname.startsWith('/fight')) {
            localStorage.removeItem(RANDOM_MONSTER_KEY);
          } else {
            this._monsterService.getOrCreateRandomMonsterKey();
          }
        }
      }
    );

    this._destroyRef.onDestroy(() => subscription.unsubscribe())
  }
}
