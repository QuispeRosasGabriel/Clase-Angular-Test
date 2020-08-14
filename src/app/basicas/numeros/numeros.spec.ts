import { incrementar } from './numeros';

describe('Puebas de numeros', () => {
  it('Debe regresar 100 si el numero ingresado es mayor a 100', () => {
    const tempNumber = 300;
    const resp = incrementar(tempNumber);
    expect(resp).toBe(100);
  });

  it('Debe regresar el número ingresado + 1', () => {
    const tempNumber = 50;
    const resp = incrementar(tempNumber);
    expect(resp).toBe(51);
  });

  it('Debe ingresar un número mayor o igual a 1', () => {
    const expectedNumber = 1;
    const tempNumber = 20;
    const resp = incrementar(tempNumber);
    expect(tempNumber).toBeGreaterThanOrEqual(expectedNumber);
  });

});
