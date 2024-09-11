import { NgIf } from '@angular/common';
import { Component, input } from '@angular/core';

import { equipItemTexts } from '@app/lib/static-texts';
import type { TEquipment } from '@app/lib/types-model';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export class TooltipComponent {
  texts = equipItemTexts;

  equipItem = input.required<TEquipment>();
  isHovered = input.required();
  isMenuOpen = input.required();
}
