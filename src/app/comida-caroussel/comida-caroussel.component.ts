import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comida-caroussel',
  templateUrl: './comida-caroussel.component.html',
  styleUrls: ['./comida-caroussel.component.css']
})
export class ComidaCarousselComponent implements OnInit {

  platillosCarrusel = [
    {
      titulo: "Tacos al pastor",
      descripcion: "Orden de 5 tacos mas refresco por $50",
      urlImg: "https://i.imgur.com/BX7cchw.jpeg",
      active: true
    },
    {
      titulo: "Tacos de bistec",
      descripcion: "Orden de 4 tacos por solo $44",
      urlImg: "https://i.imgur.com/PhDgW2Q.jpeg",
      active: false
    },
    {
      titulo: "Platillos nuevos cada mes",
      descripcion: "Conoce más...",
      urlImg: "https://i.imgur.com/JYNv9vx.jpeg",
      active: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
