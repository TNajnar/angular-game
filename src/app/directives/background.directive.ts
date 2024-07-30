import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BackgroundService } from '../services/background.service';

@Directive({
  selector: '[appBackground]',
  standalone: true,
})

export class BackgroundDirective implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private el: ElementRef, private backgroundService: BackgroundService) {
    this.subscription = new Subscription(); // Inicializace
  }

  ngOnInit(): void {
    this.subscription.add(this.backgroundService.background$.subscribe(className => {
      console.log('Background class name:', className);
      if (className) {
        this.el.nativeElement.className = className;
      } else {
        this.el.nativeElement.className = 'custom-background-teleport';
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
