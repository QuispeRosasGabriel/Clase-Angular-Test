export class Jugador {
  PuntosVida: number;

  constructor() {
    this.PuntosVida = 100;
  }

  recibeDanio(danio: number) {
    if (danio >= this.PuntosVida) {
      this.PuntosVida = 0;
    } else {
      this.PuntosVida = this.PuntosVida - danio;
    }
    return this.PuntosVida;
  }
}
