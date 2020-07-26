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
});
