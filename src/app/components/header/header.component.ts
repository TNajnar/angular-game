import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

type THeader = {
  label: string;
  url: string;
}

const headerItems: THeader[] = [
  {label: 'Home', url: 'home'},
  {label: 'Hero', url: 'hero'},
  {label: 'Bestiary', url: 'monsters'},
  {label: 'Fight', url: 'fight'},
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
