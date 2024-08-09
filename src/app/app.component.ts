import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { HeaderComponent } from './components/header/header.component';
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

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.pathname = event.url;
        if (!this.pathname.startsWith('/fight')) {
          localStorage.removeItem(RANDOM_MONSTER_KEY);
        }
      });
  }
}
