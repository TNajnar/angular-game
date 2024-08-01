import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

type THeader = {
  label: string;
  url: string;
}

const headerItems: THeader[] = [
  {label: 'Domů', url: 'home'},
  {label: 'Postava', url: 'hero'},
  {label: 'Bestiář', url: 'monsters'},
  {label: 'Boj', url: 'fight'},
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  headerItems: THeader[] = headerItems;
  router: Router;

  constructor (router: Router) {
    this.router = router;
  }

  navigateTo(url: string): void {
    this.router.navigate([`/${url}`])
  }
}
