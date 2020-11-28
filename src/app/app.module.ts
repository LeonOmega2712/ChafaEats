import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComidaCardComponent } from './comida-card/comida-card.component';
import { ComidaCarousselComponent } from './comida-caroussel/comida-caroussel.component';
import { FooterComponent } from './footer/footer.component';
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { MeseroState, LetreroState } from "../model/mesero.redux";
import { LetreroService, MeseroService } from "../service/mesero.service";

@NgModule({
  declarations: [
    AppComponent,
    ComidaCardComponent,
    ComidaCarousselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([MeseroState, LetreroState], {
      developmentMode: true
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [LetreroService, MeseroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
