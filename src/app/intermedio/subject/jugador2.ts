import { EventEmitter } from '@angular/core';

export class Jugador2 {
  puntosVida: number;
  cambioPuntosVida = new EventEmitter<number>();

  constructor() {}

  recibeDanio(danio: number) {
    if (danio >= this.puntosVida) {
      this.puntosVida = 0;
    } else {
      this.puntosVida = this.puntosVida - danio;
    }

    this.cambioPuntosVida.emit(this.puntosVida);
  }
}
