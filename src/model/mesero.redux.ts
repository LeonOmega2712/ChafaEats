import { Selector, State } from '@ngxs/store';
import { IMesero, ILetrero } from '../interface/mesero.interface';

export interface MeseroRedux {
  platillos: IMesero[];
}

export interface LetreroRedux {
  letreros: ILetrero[];
}

@State<MeseroRedux>({
  name: 'listaPlatillos',
  defaults: {
    platillos: [
      {
        titulo: 'Tacos al pastor',
        descripcion: 'Orden de 5 tacos mas refresco',
        urlImg: '../../assets/img/tacos al pastor.jpg',
        precio: '$50',
      },
      {
        titulo: 'Tacos de bistec',
        descripcion: 'Orden de 4 tacos',
        urlImg: '../../assets/img/tacos de bistec.jpg',
        precio: '$44',
      },
      {
        titulo: 'Huaraches',
        descripcion: 'Orden de 2 mas refresco',
        urlImg: '../../assets/img/huaraches.jpg',
        precio: '$40',
      },
      {
        titulo: 'Quesadilla',
        descripcion: 'Tortilla de harina, queso y guisado',
        urlImg: '../../assets/img/Quesadilla.jpg',
        precio: '$15',
      },
      {
        titulo: 'Coca-cola',
        descripcion: '600 ml',
        urlImg: '../../assets/img/Coca-cola.jpg',
        precio: '$15',
      },
      {
        titulo: 'Doritos',
        descripcion: 'Sabor nacho 65 g.',
        urlImg: '../../assets/img/doritos.jpg',
        precio: '$13',
      },
    ],
  },
})
export class MeseroState {
  constructor() {}
  @Selector()
  static obtenerPlatillos(state: MeseroRedux): IMesero[] {
    return state.platillos;
  }
}

@State<LetreroRedux>({
  name: 'listaLetreros',
  defaults: {
    letreros: [
      {
        titulo: 'Tacos al pastor',
        descripcion: 'Orden de 5 tacos mas refresco por $50',
        urlImg: 'https://i.imgur.com/BX7cchw.jpeg',
        active: true,
      },
      {
        titulo: 'Tacos de bistec',
        descripcion: 'Orden de 4 tacos por solo $44',
        urlImg: 'https://i.imgur.com/PhDgW2Q.jpeg',
        active: false,
      },
      {
        titulo: 'Platillos nuevos cada mes',
        descripcion: '"Conoce más...',
        urlImg: 'https://i.imgur.com/JYNv9vx.jpeg',
        active: false,
      }
    ],
  },
})

export class LetreroState {
  constructor() {}
  @Selector()
  static obtenerLetreros(state: LetreroRedux): ILetrero[] {
    return state.letreros;
  }
}
