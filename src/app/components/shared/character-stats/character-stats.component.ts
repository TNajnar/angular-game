import { Component, Input } from '@angular/core';

import { characterStatsTexts } from '@app/lib/static-texts';

@Component({
  selector: 'character-stats',
  standalone: true,
  template: `
    <div class="flex flex-col gap-2 pt-5">
      <span>{{ texts.name }} {{ name }}</span>
      <span>{{ texts.health }} {{ health }}</span>
      <span>{{ texts.damage }} {{ damage }}</span>
    </div>
  `,
})

export class CharacterStatsComponent {
  @Input({ required: true }) damage!: number;
  @Input({ required: true }) health!: number;
  @Input({ required: true }) name!: string;

  texts = characterStatsTexts;
}
