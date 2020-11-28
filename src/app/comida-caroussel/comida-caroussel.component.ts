import { Component, OnInit } from '@angular/core';
import { ILetrero } from '../../interface/mesero.interface';
import { LetreroService } from '../../service/mesero.service';

@Component({
  selector: 'app-comida-caroussel',
  templateUrl: './comida-caroussel.component.html',
  styleUrls: ['./comida-caroussel.component.css']
})
export class ComidaCarousselComponent implements OnInit {
  letreros: ILetrero[];
  constructor(private LS: LetreroService) { }

  ngOnInit(): void {
    this.letreros = this.LS.obtenerLetreros();
  }

}
