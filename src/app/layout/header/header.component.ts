import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type THeader = {
  label: string;
  url: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  headerItems: THeader[] = [
    {label: 'Domů', url: '#'},
    {label: 'Postava', url: '#'},
    {label: 'Boj', url: '#'},
  ];
}
