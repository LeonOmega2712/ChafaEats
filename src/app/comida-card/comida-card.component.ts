import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comida-card',
  templateUrl: './comida-card.component.html',
  styleUrls: ['./comida-card.component.css']
})
export class ComidaCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  platillosCatalogo = [
    {
      titulo: "Tacos al pastor",
      descripcion: "Orden de 5 tacos mas refresco",
      urlImg: "../../assets/img/tacos al pastor.jpg",
      precio: "$50"
    },
    {
      titulo: "Tacos de bistec",
      descripcion: "Orden de 4 tacos",
      urlImg: "../../assets/img/tacos de bistec.jpg",
      precio: "$44"
    },
    {
      titulo: "Huaraches",
      descripcion: "Orden de 2 mas refresco",
      urlImg: "../../assets/img/huaraches.jpg",
      precio: "$40"
    },
    {
      titulo: "Quesadilla",
      descripcion: "Tortilla de harina, queso y guisado",
      urlImg: "../../assets/img/Quesadilla.jpg",
      precio: "$15"
    },
    {
      titulo: "Coca-cola",
      descripcion: "600 ml",
      urlImg: "../../assets/img/Coca-cola.jpg",
      precio: "$15"
    },
    {
      titulo: "Doritos",
      descripcion: "Sabor nacho 65 g.",
      urlImg: "../../assets/img/doritos.jpg",
      precio: "$13"
    }
  ]
}
