import { Component, OnInit } from '@angular/core';
import { IMesero } from '../../interface/mesero.interface';
import { MeseroService } from '../../service/mesero.service';

@Component({
  selector: 'app-comida-card',
  templateUrl: './comida-card.component.html',
  styleUrls: ['./comida-card.component.css']
})
export class ComidaCardComponent implements OnInit {
  platillos: IMesero[];
  constructor(private MS: MeseroService) { }

  ngOnInit(): void {
    this.platillos = this.MS.obtenerPlatillos();
  }
}
