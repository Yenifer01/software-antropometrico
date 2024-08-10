import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesBiologicasComponent } from './funciones-biologicas.component';

describe('FuncionesBiologicasComponent', () => {
  let component: FuncionesBiologicasComponent;
  let fixture: ComponentFixture<FuncionesBiologicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionesBiologicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncionesBiologicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
