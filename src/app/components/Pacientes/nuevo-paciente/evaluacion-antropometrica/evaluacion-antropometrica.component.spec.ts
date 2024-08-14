import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionAntropometricaComponent } from './evaluacion-antropometrica.component';

describe('EvaluacionAntropometricaComponent', () => {
  let component: EvaluacionAntropometricaComponent;
  let fixture: ComponentFixture<EvaluacionAntropometricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluacionAntropometricaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluacionAntropometricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
