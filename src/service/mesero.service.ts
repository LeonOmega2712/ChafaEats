import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ILetrero, IMesero } from '../interface/mesero.interface';
import { MeseroState, LetreroState } from '../model/mesero.redux';

@Injectable({
  providedIn: 'root'
})
export class MeseroService {

  constructor(private store: Store) { }
  obtenerPlatillos(): IMesero[] {
    return this.store.selectSnapshot(MeseroState.obtenerPlatillos);
  }
}
@Injectable({
  providedIn: 'root'
})
export class LetreroService {
  constructor(private store: Store){}
  obtenerLetreros(): ILetrero[] {
    return this.store.selectSnapshot(LetreroState.obtenerLetreros)
  }
}
