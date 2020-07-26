import { mensaje } from './string';

describe('Pruebas de string', () => {
  it('debe regresar un string', () => {
    const resp = mensaje('Gabriel');
    expect(typeof resp).toBe('string');
  });

  it('debe contener el nombre enviado', () => {
    const nombre = 'Gabriel';
    const resp = mensaje(nombre);
    expect(resp).toContain(nombre);
  });
});
