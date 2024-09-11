import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

type THeader = {
  label: string;
  url: string;
}

const headerItems: THeader[] = [
  { label: 'Hero', url: '/hero' },
  { label: 'Bestiary', url: '/monsters' },
  { label: 'Fight', url: '/fight' },
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {
  headerItems: THeader[] = headerItems;
}
