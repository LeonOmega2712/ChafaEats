import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComidaCardComponent } from './comida-card/comida-card.component';
import { ComidaCarousselComponent } from './comida-caroussel/comida-caroussel.component';

@NgModule({
  declarations: [
    AppComponent,
    ComidaCardComponent,
    ComidaCarousselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
