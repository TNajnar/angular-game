import { Component, inject, input } from '@angular/core';

import { ErrorService } from '@components/shared/error.service';
import { ModalComponent } from "../modal.component";
import { modalTexts } from '@app/lib/static-texts';

@Component({
    selector: 'app-error-modal',
    standalone: true,
    templateUrl: './error-modal.component.html',
    styleUrl: './error-modal.component.css',
    imports: [ModalComponent]
})
export class ErrorModalComponent {
  texts = modalTexts;
  title = input<string>();
  message = input<string>();

  private errorService: ErrorService = inject(ErrorService);

  onClearError() {
    this.errorService.clearError();
  }
}
