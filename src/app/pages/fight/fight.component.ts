import { Component } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';

@Component({
  selector: 'app-fight',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './fight.component.html',
})

export class FightComponent {
}
