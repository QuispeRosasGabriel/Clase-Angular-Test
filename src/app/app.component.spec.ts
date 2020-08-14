import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    // Preparar
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Actuar
    fixture.detectChanges();

    // Afirmar
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-karma'`, () => {
    // Preparar
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Actuar
    fixture.detectChanges();

    // Afirmar
    expect(app.title).toEqual('angular-karma');
  });

  it('should render title', () => {
    // Preparar
    const fixture = TestBed.createComponent(AppComponent);

    // Actuar
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    // Afirmar
    expect(compiled.querySelector('.content span').textContent).toContain('angular-karma app is running!');
  });
});
