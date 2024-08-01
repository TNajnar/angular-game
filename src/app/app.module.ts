import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, BrowserModule],
  providers: [
    provideHttpClient(),
  ],
})

export class AppModule { }
