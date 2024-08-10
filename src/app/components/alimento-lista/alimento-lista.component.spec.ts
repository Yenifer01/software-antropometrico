import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentoListaComponent } from './alimento-lista.component';

describe('AlimentoListaComponent', () => {
  let component: AlimentoListaComponent;
  let fixture: ComponentFixture<AlimentoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentoListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlimentoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
