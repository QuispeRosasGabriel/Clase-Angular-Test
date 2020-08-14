import { Jugador } from './clase';

describe('Pruebas de clase', () => {
  // lifecycle de las pruebas
  const jugador = new Jugador();

  beforeAll(() => {
    console.log('Probando');
  });

  beforeEach(() => {
    jugador.PuntosVida = 100;
  });

  afterAll(() => {
    console.log('Probando');
  });

  afterEach(() => {
    console.log('Probando');
  });

  it('Debe retornar la diferencia en puntos de vida de acuerdo a lo que se envia', () => {
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);
  });

  it('Debe retornar 0 si el daño recibido es mayor a 100', () => {
    const resp = jugador.recibeDanio(120);
    expect(resp).toBe(100);
  });

  it('Debe comprobar que la constante jugador sea de tipo Jugador', () => {
    expect(jugador).toBeInstanceOf(Jugador);
  });

});
