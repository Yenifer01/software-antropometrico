import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentoEditarComponent } from './alimento-editar.component';

describe('AlimentoEditarComponent', () => {
  let component: AlimentoEditarComponent;
  let fixture: ComponentFixture<AlimentoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentoEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlimentoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
