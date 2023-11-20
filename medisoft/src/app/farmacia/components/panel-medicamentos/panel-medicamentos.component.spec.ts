import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMedicamentosComponent } from './panel-medicamentos.component';

describe('PanelMedicamentosComponent', () => {
  let component: PanelMedicamentosComponent;
  let fixture: ComponentFixture<PanelMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelMedicamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
