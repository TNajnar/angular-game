import { NgIf } from '@angular/common';
import { Component, input } from '@angular/core';

import { TEquipment } from '@app/components/equipment/equipment.model';
import { droppedItemTexts } from '@app/lib/static-texts';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export class TooltipComponent {
  texts = droppedItemTexts;

  droppedItem = input.required<TEquipment>();
  isHovered = input.required();
  isMenuOpen = input.required();
}
