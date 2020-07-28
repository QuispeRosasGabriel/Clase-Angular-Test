// import { Jugador2 } from './jugador2';

// describe('Pruebas del jugador2', () => {
//   let jugador: Jugador2;

//   beforeEach(() => (jugador = new Jugador2()));

//   it('Debe emitir un valor cuando recibe danio', () => {
//     let nuevoHP = 0;

//     jugador.cambioPuntosVida.subscribe((hp) => {
//       nuevoHP = hp;
//     });

//     jugador.recibeDanio(1000);

//     expect(nuevoHP).toBe(0);
//   });

//   it('Debe emitir un valor cuando recibe danio y sobrevivir si es menos de 100', () => {
//     let nuevoPuntaje = 0;

//     jugador.cambioPuntosVida.subscribe((puntaje) => (nuevoPuntaje = puntaje));

//     jugador.recibeDanio(50);

//     expect(nuevoPuntaje).toBe(50);
//   });
// });
