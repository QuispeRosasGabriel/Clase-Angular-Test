import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, EMPTY, throwError } from 'rxjs';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/from';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;

  const servicio = new MedicosService(null);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Init: debe cargar los medicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];

    // Espia al servicio y cuando alguien llame a get medicos
    // vas mandar la informacion de callfake
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from(medicos);
    });

    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('debe llamar al servidor para agregar un medico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake((resp) => {
      return EMPTY;
    });

    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();
  });

  it('debe agregar un medico al arreglo de medicos', () => {
    const medico = { id: 1, nombre: 'Mario' };

    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

    componente.agregarMedico();

    expect(componente.medicos.length).toBe(1);
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('probar errores de un observable, si falla la adicion la propiedad mensajeError debe ser igual al error del servicio', () => {
    const miError = 'No se pudo agregar el medico';

    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));
    componente.agregarMedico();

    expect(componente.mensajeError).toBe(miError);
  });

  it('debe llamar al servidor para borrar un medico incluyendo la confirmacion', () => {
    spyOn(window, 'confirm').and.returnValue(true);

    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

    componente.borrarMedico('1');

    expect(espia).toHaveBeenCalledWith('1');
  });
});
