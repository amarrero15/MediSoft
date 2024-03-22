import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresConsultasComponent } from './indicadores-consultas.component';

describe('IndicadoresConsultasComponent', () => {
  let component: IndicadoresConsultasComponent;
  let fixture: ComponentFixture<IndicadoresConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadoresConsultasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadoresConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
