import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class BackgroundService {
  private backgroundSubject = new BehaviorSubject<string | null>(null);
  background$ = this.backgroundSubject.asObservable();

  setBackground(className: string): void {
    this.backgroundSubject.next(className);
  }

  clearBackground(): void {
    this.backgroundSubject.next(null);
  }
}
