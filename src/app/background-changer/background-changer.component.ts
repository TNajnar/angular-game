import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-changer',
  templateUrl: './background-changer.component.html',
})

export class BackgroundChangerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setBackgroundImage('/start_background.webp');
  }

  setBackgroundImage(imageUrl: string): void {
    document.body.style.backgroundImage = `url(${imageUrl})`;
  }
}
