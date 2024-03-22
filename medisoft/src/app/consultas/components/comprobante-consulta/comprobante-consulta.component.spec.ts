import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobanteConsultaComponent } from './comprobante-consulta.component';

describe('ComprobanteConsultaComponent', () => {
  let component: ComprobanteConsultaComponent;
  let fixture: ComponentFixture<ComprobanteConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobanteConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobanteConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
