import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements AfterViewInit {
  private _dialogEl = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  ngAfterViewInit(): void {
    this._dialogEl().nativeElement.showModal();
    this._dialogEl().nativeElement.focus();
  }
}
