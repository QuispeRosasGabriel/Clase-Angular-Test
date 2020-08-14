import { obtenerPersonas } from './arreglos';

describe('Pruebas de arreglos', () => {
  it('debe retornar al menos 3 personas', () => {
    const resp = obtenerPersonas();
    // USAMOS 'toBeGreaterThanOrEqual' PARA QUE LA PRUEBA NO SEA TAN FRAGIL
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  it('debe existir Luis y Mario', () => {
    const resp = obtenerPersonas();
    expect(resp).toContain('Luis');
    expect(resp).toContain('Mario');
  });
});
