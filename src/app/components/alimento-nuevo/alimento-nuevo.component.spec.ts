import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentoNuevoComponent } from './alimento-nuevo.component';

describe('AlimentoNuevoComponent', () => {
  let component: AlimentoNuevoComponent;
  let fixture: ComponentFixture<AlimentoNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentoNuevoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlimentoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
