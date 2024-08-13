import { Component, Input } from '@angular/core';

@Component({
  selector: 'character-stats',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col gap-2 pt-5">
      <span>Name: {{ name }}</span>
      <span>Health: {{ health }}</span>
      <span>Damage: {{ damage }}</span>
    </div>
  `,
})

export class CharacterStatsComponent {
  @Input() damage!: number;
  @Input() health!: number;
  @Input() name!: string;
}
