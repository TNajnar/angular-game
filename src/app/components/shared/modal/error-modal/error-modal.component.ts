import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ErrorService } from '@components/shared/error.service';
import { ModalComponent } from "../modal.component";
import { modalTexts } from '@app/lib/static-texts';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [ModalComponent, MatButtonModule],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.css',
})
export class ErrorModalComponent {
  texts = modalTexts;
  title = input<string>();
  message = input<string>();

  private _errorService: ErrorService = inject(ErrorService);

  onClearError() {
    this._errorService.clearError();
  }
}
