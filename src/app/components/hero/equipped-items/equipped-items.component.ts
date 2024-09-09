import { Component, inject } from '@angular/core';

import { HeroService } from '../hero.service';
import { CustomIconComponent, EIconVariants } from '@app/ui/custom-icon/custom-icon.component';

@Component({
  selector: 'app-equipped-items',
  standalone: true,
  imports: [CustomIconComponent],
  templateUrl: './equipped-items.component.html',
})
export class EquippedItemsComponent {
  EIconVariants = EIconVariants;

  private heroService: HeroService = inject(HeroService);

  equippedArmor = this.heroService.equippedItems;
  equippedWeapon = this.heroService.equippedItems;
}
