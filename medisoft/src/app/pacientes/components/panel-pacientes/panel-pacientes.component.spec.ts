import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPacientesComponent } from './panel-pacientes.component';

describe('PanelPacientesComponent', () => {
  let component: PanelPacientesComponent;
  let fixture: ComponentFixture<PanelPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
