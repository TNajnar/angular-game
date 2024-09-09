import { Component } from '@angular/core';

import { HeroComponent } from '@components/hero/hero.component';
import { InventoryComponent } from '@app/components/hero/inventory/inventory.component';
import { HeroStatsComponent } from '@app/components/hero/hero-stats/hero-stats.component';
import { CustomIconComponent } from '@app/ui/custom-icon/custom-icon.component';
import { EquippedItemsComponent } from "../../components/hero/equipped-items/equipped-items.component";

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [CustomIconComponent, InventoryComponent, HeroComponent, HeroStatsComponent, EquippedItemsComponent],
  templateUrl: './hero-page.component.html',
})

export class HeroPageComponent {

}
