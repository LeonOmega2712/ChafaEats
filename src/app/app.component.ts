import { Component } from '@angular/core';
import { ComidaCardComponent } from './comida-card/comida-card.component';
import { ComidaCarousselComponent } from './comida-caroussel/comida-caroussel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChafaEats';
}
