import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackgroundService } from '../../services/background.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {

  constructor(private backgroundService: BackgroundService) {}

  // ngOnInit() {
  //   this.backgroundService.setBackground('custom-background-1'); // Nastavení specifického pozadí
  // }

  ngOnInit(): void {
    document.body.classList.add('custom-background-teleport');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('custom-background-teleport');
  }
}
