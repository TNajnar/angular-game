import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  imports: [CommonModule, BrowserModule, HeaderComponent],
})

export class AppModule { }
