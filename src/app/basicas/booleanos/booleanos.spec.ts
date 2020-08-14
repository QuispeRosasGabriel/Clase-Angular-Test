import { usuarioLogueado, capturarData } from './booleanos';

describe('Pruebas de booleanos', () => {
  it('debe retornar true', () => {
    const resp = usuarioLogueado();
    expect(resp).toBeTruthy();
  });

  // PROBANDO NEGACION
  it('debe retornar true a la negacion de que NO sea falso', () => {
    const resp = usuarioLogueado();
    expect(resp).not.toBeFalsy();
  });

  it('debe retornar false', () => {
    const resp = capturarData();
    expect(resp).not.toBeTrue();
  });

  it('debe probar que es false', () => {
    const resp = capturarData();
    expect(resp).toBeFalse();
  });

});
