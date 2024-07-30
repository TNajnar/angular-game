import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { BackgroundDirective } from './directives/background.directive';
import { BackgroundService } from './services/background.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [BackgroundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
