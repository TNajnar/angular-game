import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { DroppedItemsService } from './dropped-items.service';
import { DroppedItemComponent } from './dropped-item/dropped-item.component';
import { droppedItemsTexts } from '@app/lib/static-texts';

@Component({
  selector: 'app-dropped-items',
  standalone: true,
  imports: [AsyncPipe, DroppedItemComponent],
  templateUrl: './dropped-items.component.html',
  styleUrl: './dropped-items.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DroppedItemsComponent {
  texts = droppedItemsTexts;

  droppedItemsService: DroppedItemsService = inject(DroppedItemsService);

  droppedItems = this.droppedItemsService.allDroppedItems;
}
