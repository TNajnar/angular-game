import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { CustomIconComponent } from './ui/custom-icon/custom-icon.component';

@NgModule({
  imports: [CommonModule, BrowserModule, HeaderComponent],
})

export class AppModule { }
