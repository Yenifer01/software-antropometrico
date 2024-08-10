import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadFisicaComponent } from './actividad-fisica.component';

describe('ActividadFisicaComponent', () => {
  let component: ActividadFisicaComponent;
  let fixture: ComponentFixture<ActividadFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadFisicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActividadFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
