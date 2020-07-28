import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable, from, EMPTY } from 'rxjs';

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

    //Espia al servicio y cuando alguien llame a get medicos
    //vas mandar la informacion de callfake
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
});
