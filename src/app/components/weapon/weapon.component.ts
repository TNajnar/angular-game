import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-weapon',
  standalone: true,
  templateUrl: './weapon.component.html',
})

export class WeaponComponent {
  @Input() name: string = '';
  @Input() damage: number = 0;
}
