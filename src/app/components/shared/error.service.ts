import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private _error = signal('');

  error = this._error.asReadonly();

  showError(message: string): void {
    this._error.set(message);
  }

  clearError(): void {
    this._error.set('');
  }
}
