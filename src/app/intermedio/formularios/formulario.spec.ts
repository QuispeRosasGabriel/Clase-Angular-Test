import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Pruebas del formulario', () => {
  let formulario: FormularioRegister;

  beforeEach(() => (formulario = new FormularioRegister(new FormBuilder())));

  it('debe crear un formulario con dos campos', () => {
    expect(formulario.form.contains('email')).toBeTruthy();
    expect(formulario.form.contains('password')).toBeTruthy();
  });

  it('probando validaciones de campos que deben ser obligatorio', () => {
    const emailControl = formulario.form.get('email');
    const passwordControl = formulario.form.get('password');
    emailControl.setValue('');
    passwordControl.setValue('');

    expect(emailControl.valid).toBeFalsy();
    expect(passwordControl.valid).toBeFalsy();
  });

  it('validando que ingrese un correo valido', () => {
    const control = formulario.form.get('email');
    control.setValue('gabo@gmail.com');
    expect(control.valid).toBeTruthy();
  });
});
