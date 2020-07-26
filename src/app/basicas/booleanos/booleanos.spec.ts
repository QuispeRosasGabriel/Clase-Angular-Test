import { usuarioLogueado } from './booleanos';

describe('Pruebas de booleanos', () => {
  it('debe retornar true', () => {
    const resp = usuarioLogueado();
    expect(resp).toBeTruthy();
  });

  //PROBANDO NEGACION
  it('debe retornar true a la negacion de que NO sea falso', () => {
    const resp = usuarioLogueado();
    expect(resp).not.toBeFalsy();
  });
});
